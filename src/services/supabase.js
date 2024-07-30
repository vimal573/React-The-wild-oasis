import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zkchcolbgtdeyjrrhetu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprY2hjb2xiZ3RkZXlqcnJoZXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMjQzMjcsImV4cCI6MjAzNzkwMDMyN30.jis7uKuGfUlVYr5JnBr58o8_43D-HB1OfKJ-yPy9NoY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
