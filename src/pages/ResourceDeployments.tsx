
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, AlertCircle } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const ResourceDeployments = () => {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [deployments, setDeployments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  
  const isOfficer = profile?.role === 'officer';
  
  // If not an officer, redirect to dashboard
  if (!isOfficer) {
    return <Navigate to="/dashboard" />;
  }
  
  useEffect(() => {
    fetchDeployments();
  }, []);
  
  const fetchDeployments = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('resource_deployments')
        .select('*')
        .order('deployed_at', { ascending: false });
      
      if (error) throw error;
      
      setDeployments(data || []);
    } catch (error) {
      console.error('Error fetching deployments:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const [formData, setFormData] = useState({
    resourceType: '',
    latitude: '',
    longitude: '',
    status: 'active',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.resourceType || !formData.latitude || !formData.longitude) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Create point geometry for PostgreSQL
      const locationPoint = `(${formData.longitude},${formData.latitude})`;
      
      const { error } = await supabase.from('resource_deployments').insert({
        resource_type: formData.resourceType,
        location: locationPoint,
        officer_id: profile?.id,
        status: formData.status,
      });
      
      if (error) throw error;
      
      toast({
        title: "Resource deployed",
        description: "The resource has been deployed successfully.",
      });
      
      setFormData({
        resourceType: '',
        latitude: '',
        longitude: '',
        status: 'active',
      });
      
      setFormVisible(false);
      fetchDeployments();
      
    } catch (error: any) {
      toast({
        title: "Error deploying resource",
        description: error.message,
        variant: "destructive",
      });
      console.error('Error deploying resource:', error);
    }
  };
  
  const resourceTypes = [
    "Patrol Vehicle",
    "Motorcycle Unit",
    "Foot Patrol",
    "Traffic Unit",
    "K9 Unit",
    "Surveillance Team",
    "Community Kiosk",
    "Rapid Response Team"
  ];
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Resource Deployments</h1>
        
        <Button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? 'Cancel' : 'Deploy Resource'}
        </Button>
      </div>
      
      {formVisible && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Deploy Resource</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resourceType">Resource Type</Label>
                <Select
                  value={formData.resourceType}
                  onValueChange={(value) => handleSelectChange('resourceType', value)}
                >
                  <SelectTrigger id="resourceType">
                    <SelectValue placeholder="Select resource type" />
                  </SelectTrigger>
                  <SelectContent>
                    {resourceTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
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
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleSelectChange('status', value)}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="en-route">En Route</SelectItem>
                    <SelectItem value="standby">Standby</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Deploy</Button>
            </CardFooter>
          </form>
        </Card>
      )}
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : deployments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deployments.map((deployment: any) => (
            <Card key={deployment.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  {deployment.resource_type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <span className={`text-sm font-medium ${
                      deployment.status === 'active' ? 'text-green-600' : 
                      deployment.status === 'en-route' ? 'text-amber-600' : 'text-blue-600'
                    }`}>
                      {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Deployed:</span>
                    <span className="text-sm">
                      {new Date(deployment.deployed_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-muted-foreground">
              <Shield className="mx-auto h-12 w-12 mb-4 text-muted-foreground opacity-30" />
              <p>No active deployments</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ResourceDeployments;
