import { createClient } from "@supabase/supabase-js";
import envConfig from "./envConfig";

export const supabase = createClient(
  envConfig.supabase.url,
  envConfig.supabase.anonKey,
);
