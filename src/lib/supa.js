import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mhdhrepvplmueeywhcfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZGhyZXB2cGxtdWVleXdoY2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MTk5NDksImV4cCI6MTk4MjE5NTk0OX0.54xnXfTaGvNlHXKP4blSqR3uH4ceb_8H0MOS6g3BPHo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)