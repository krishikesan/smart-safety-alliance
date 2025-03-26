
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const CrimeMap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading map data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Crime Map</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-600">
            <AlertCircle className="h-5 w-5 mr-2" />
            Map Integration Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To fully implement this feature, we need to integrate a mapping library such as Mapbox, Google Maps, or Leaflet.
            Once integrated, this page will display a heatmap of crime incidents based on reported data.
          </p>
        </CardContent>
      </Card>
      
      <div className="bg-white rounded-md shadow-sm border p-4 h-[500px] flex items-center justify-center">
        {loading ? (
          <div className="animate-pulse-subtle">Loading map data...</div>
        ) : (
          <div className="text-center">
            <div className="bg-gray-200 h-[400px] w-full rounded-md flex items-center justify-center">
              <p className="text-gray-500">
                Map placeholder - Integration with mapping service required
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrimeMap;
