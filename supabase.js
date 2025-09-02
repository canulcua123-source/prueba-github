import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://eurgxxfwbtymadhyubgb.supabase.co"; // 👈 cambia por tu URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cmd4eGZ3YnR5bWFkaHl1YmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MzYyMjAsImV4cCI6MjA3MjQxMjIyMH0.-VvZ7IhaCpKbSlicrUNz_ZGuC3qgvG9cN-hGLkIKK90"; // 👈 cambia por tu API Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
