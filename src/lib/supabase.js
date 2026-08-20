import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kxypqrzgcqwiixwnbdfz.supabase.co'; 

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4eXBxcnpnY3F3aWl4d25iZGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDA4OTAsImV4cCI6MjEwMjE3Njg5MH0.b_WOoJl_whdGfnY5NpfXizAhmawgc9cbhVEuEatszqM';

export const supabase = createClient(supabaseUrl, supabaseKey);