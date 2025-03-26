// This file is read-only, using a new file to extend the Navbar functionality

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavbarWithAuth = () => {
  const { isAuthenticated, profile } = useAuth();
  
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              CrimeSpot
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-4 ml-10">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100">
                Home
              </Link>
              <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100">
                Features
              </a>
              <a href="#heatmap" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100">
                Technology
              </a>
              <a href="#cooperation" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100">
                Cooperation
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <div className="hidden md:block">
                  <Link to="/dashboard/profile">
                    <Button variant="ghost" className="px-2">
                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {profile?.first_name ? profile.first_name.charAt(0) : 'U'}
                      </div>
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <Link to="/auth">
                <Button>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWithAuth;
