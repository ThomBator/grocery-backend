import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import * as path from "path";

config({ path: "./.env.local" });

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_ANON;

if (supabaseUrl === undefined) {
  throw new Error("supabaseURL is undefined");
}
if (supabaseKey === undefined) {
  throw new Error("supabaseKey is undefined");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
