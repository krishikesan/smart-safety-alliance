
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { 
  AlertCircle, 
  Menu, 
  MapPin, 
  Bell, 
  User, 
  LogOut, 
  BarChart3, 
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMobile } from '@/hooks/use-mobile';

const DashboardLayout = () => {
  const { isAuthenticated, user, signOut, profile, loading } = useAuth();
  const isMobile = useMobile();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-subtle">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  const isOfficer = profile?.role === 'officer';

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Crime Map', href: '/dashboard/map', icon: MapPin },
    { name: 'Report Crime', href: '/dashboard/report', icon: AlertCircle },
    { name: 'Safety Alerts', href: '/dashboard/alerts', icon: Bell },
    ...(isOfficer ? [{ name: 'Deployments', href: '/dashboard/deployments', icon: Shield }] : []),
    { name: 'Profile', href: '/dashboard/profile', icon: User },
  ];

  const renderNavItems = () => (
    <div className="flex flex-col space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
        >
          <item.icon className="h-5 w-5 mr-3" />
          <span>{item.name}</span>
        </Link>
      ))}
      <Button 
        variant="ghost" 
        className="flex items-center justify-start p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-destructive transition-colors"
        onClick={signOut}
      >
        <LogOut className="h-5 w-5 mr-3" />
        <span>Sign Out</span>
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      {isMobile && (
        <div className="bg-white shadow-sm py-3 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="mt-8 mb-6">
                  <h2 className="text-xl font-semibold mb-1">CrimeSpot</h2>
                  <p className="text-sm text-muted-foreground">
                    {profile?.first_name ? `Welcome, ${profile.first_name}` : user?.email}
                  </p>
                </div>
                {renderNavItems()}
              </SheetContent>
            </Sheet>
            <Link to="/dashboard" className="font-semibold text-lg ml-2">
              CrimeSpot
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/dashboard/profile">
              <div className="h-8 w-8 rounded-full bg-primary-foreground flex items-center justify-center text-primary text-sm font-medium">
                {profile?.first_name ? profile.first_name.charAt(0) : user?.email?.charAt(0)}
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - hidden on mobile */}
        {!isMobile && (
          <div className="w-64 bg-white shadow-sm border-r h-screen flex-shrink-0 p-4 overflow-y-auto">
            <div className="mt-4 mb-8">
              <h2 className="text-xl font-semibold mb-1">CrimeSpot</h2>
              <p className="text-sm text-muted-foreground">
                {profile?.first_name ? `Welcome, ${profile.first_name}` : user?.email}
              </p>
            </div>
            {renderNavItems()}
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
