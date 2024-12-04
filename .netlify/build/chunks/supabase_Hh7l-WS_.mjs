import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uyvoqtgubqnohialjfqu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dm9xdGd1YnFub2hpYWxqZnF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNzAxMjMsImV4cCI6MjA0ODc0NjEyM30.aseY-GE1R59H9nWTbtorXMC5VTwph6gHHJFnX0Cj8ic";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
