
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const ReportCrime = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    description: '',
    category: '',
    severity: 3,
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSliderChange = (value: number[]) => {
    setFormData({ ...formData, severity: value[0] });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.latitude || !formData.longitude || !formData.description || !formData.category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      
      // Create point geometry for PostgreSQL
      const locationPoint = `(${formData.longitude},${formData.latitude})`;
      
      const { error } = await supabase.from('crime_reports').insert({
        location: locationPoint,
        description: formData.description,
        category: formData.category,
        severity: formData.severity,
        reported_by: user?.id,
      });
      
      if (error) throw error;
      
      toast({
        title: "Report submitted",
        description: "Your crime report has been submitted successfully.",
      });
      
      // Reset form
      setFormData({
        latitude: '',
        longitude: '',
        description: '',
        category: '',
        severity: 3,
      });
      
    } catch (error: any) {
      toast({
        title: "Error submitting report",
        description: error.message,
        variant: "destructive",
      });
      console.error('Error submitting crime report:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const categories = [
    "Theft",
    "Assault",
    "Vandalism",
    "Suspicious Activity",
    "Traffic Violation",
    "Drug-related",
    "Harassment",
    "Other"
  ];
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Report a Crime</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Crime Report Form</CardTitle>
          <CardDescription>
            Please provide accurate information to assist law enforcement.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  name="latitude"
                  placeholder="e.g. 12.9716"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  name="longitude"
                  placeholder="e.g. 77.5946"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Please describe what happened in detail..."
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Severity (1-5)</Label>
                <span className="text-sm text-muted-foreground">{formData.severity}</span>
              </div>
              <Slider
                defaultValue={[3]}
                max={5}
                min={1}
                step={1}
                value={[formData.severity]}
                onValueChange={handleSliderChange}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Minor</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Report'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ReportCrime;
