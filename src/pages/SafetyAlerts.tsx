
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Bell, Shield } from 'lucide-react';

const SafetyAlerts = () => {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  
  const isOfficer = profile?.role === 'officer';
  
  useEffect(() => {
    fetchAlerts();
  }, []);
  
  const fetchAlerts = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('safety_alerts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setAlerts(data || []);
    } catch (error) {
      console.error('Error fetching safety alerts:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    latitude: '',
    longitude: '',
    radius: '',
    severity: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.severity) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const locationPoint = formData.latitude && formData.longitude 
        ? `(${formData.longitude},${formData.latitude})`
        : null;
      
      const { error } = await supabase.from('safety_alerts').insert({
        title: formData.title,
        description: formData.description,
        area_affected: locationPoint,
        radius: formData.radius ? parseFloat(formData.radius) : null,
        severity: formData.severity,
        created_by: profile?.id,
      });
      
      if (error) throw error;
      
      toast({
        title: "Alert created",
        description: "The safety alert has been created successfully.",
      });
      
      setFormData({
        title: '',
        description: '',
        latitude: '',
        longitude: '',
        radius: '',
        severity: '',
      });
      
      setFormVisible(false);
      fetchAlerts();
      
    } catch (error: any) {
      toast({
        title: "Error creating alert",
        description: error.message,
        variant: "destructive",
      });
      console.error('Error creating safety alert:', error);
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Safety Alerts</h1>
        
        {isOfficer && (
          <Button onClick={() => setFormVisible(!formVisible)}>
            {formVisible ? 'Cancel' : 'Create Alert'}
          </Button>
        )}
      </div>
      
      {formVisible && isOfficer && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create Safety Alert</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Alert Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude">Latitude (optional)</Label>
                  <Input
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">Longitude (optional)</Label>
                  <Input
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="radius">Radius in km (optional)</Label>
                  <Input
                    id="radius"
                    name="radius"
                    type="number"
                    min="0"
                    step="0.1"
                    value={formData.radius}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="severity">Severity</Label>
                <Select
                  value={formData.severity}
                  onValueChange={(value) => handleSelectChange('severity', value)}
                >
                  <SelectTrigger id="severity">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Create Alert</Button>
            </CardFooter>
          </form>
        </Card>
      )}
      
      {loading ? (
        <div className="grid grid-cols-1 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : alerts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {alerts.map((alert: any) => (
            <Card key={alert.id}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  {alert.severity === 'critical' ? (
                    <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  ) : alert.severity === 'high' ? (
                    <Bell className="h-5 w-5 mr-2 text-amber-500" />
                  ) : (
                    <Shield className="h-5 w-5 mr-2 text-blue-500" />
                  )}
                  {alert.title}
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    {new Date(alert.created_at).toLocaleString()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{alert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-muted-foreground">
              <Bell className="mx-auto h-12 w-12 mb-4 text-muted-foreground opacity-30" />
              <p>No safety alerts at this time</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SafetyAlerts;
