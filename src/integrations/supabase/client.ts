// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gszbrvokahirqhtekmre.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzemJydm9rYWhpcnFodGVrbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMDExMTEsImV4cCI6MjA1ODU3NzExMX0.mEmxQ6m3nRZ8LQdt_AJga_njAFZguwXob4JQPOc-Yr8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);