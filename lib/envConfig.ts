const envConfig = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
};

if (!envConfig.supabase.url || !envConfig.supabase.anonKey) {
  console.warn(
    "Warning: Missing Supabase environment variables. Please check your .env file.",
  );
}

export default envConfig;
