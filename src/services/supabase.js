import {createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://dywycmccxnoqfqvbzmoh.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d3ljbWNjeG5vcWZxdmJ6bW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDc3NzIsImV4cCI6MjA0Njk4Mzc3Mn0.FxBYrsdll-oj6UG11bkwTCHCsbgQO6qZ7t7aa2lkubw';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
export default supabase;
 
