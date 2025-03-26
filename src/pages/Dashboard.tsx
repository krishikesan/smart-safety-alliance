
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, MapPin, AlertCircle, Users } from 'lucide-react';

const Dashboard = () => {
  const { profile } = useAuth();
  const [stats, setStats] = useState({
    totalReports: 0,
    pendingReports: 0,
    safetyAlerts: 0,
    deployedResources: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get total crime reports
        const { count: totalReports, error: reportsError } = await supabase
          .from('crime_reports')
          .select('*', { count: 'exact', head: true });

        // Get pending crime reports
        const { count: pendingReports, error: pendingError } = await supabase
          .from('crime_reports')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending');

        // Get safety alerts
        const { count: safetyAlerts, error: alertsError } = await supabase
          .from('safety_alerts')
          .select('*', { count: 'exact', head: true });

        // Get active resource deployments
        const { count: deployedResources, error: resourcesError } = await supabase
          .from('resource_deployments')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active');

        if (reportsError || pendingError || alertsError || resourcesError) {
          console.error('Error fetching stats:', { reportsError, pendingError, alertsError, resourcesError });
          return;
        }

        setStats({
          totalReports: totalReports || 0,
          pendingReports: pendingReports || 0,
          safetyAlerts: safetyAlerts || 0,
          deployedResources: deployedResources || 0,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const isOfficer = profile?.role === 'officer';

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Total Crime Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalReports}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                Pending Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.pendingReports}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.safetyAlerts}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Deployed Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.deployedResources}</p>
            </CardContent>
          </Card>
        </div>
      )}
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Crime Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <p className="text-muted-foreground">No recent reports available</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Safety Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <p className="text-muted-foreground">No active alerts</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
