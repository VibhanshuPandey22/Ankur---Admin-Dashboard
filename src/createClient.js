import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://ubjstezklgcubuzbtpkh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVianN0ZXprbGdjdWJ1emJ0cGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNTQ1MjAsImV4cCI6MjA0MDkzMDUyMH0.vJu8Ym0S5mqyx1g4nYta2U42pf3SnVG0FkPACg1yLo0");