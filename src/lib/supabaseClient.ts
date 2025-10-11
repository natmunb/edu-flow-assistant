import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY?.slice(0, 10) + "...");
console.log("🧪 VITE ENV:", import.meta.env.VITE_SUPABASE_URL);

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key not found. Check your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);