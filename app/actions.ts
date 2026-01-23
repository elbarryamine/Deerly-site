"use server";

import { supabase } from "@/lib/supabase";

export async function joinWaitlist(email: string) {
  try {
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      // Handle unique violation (user already signed up) gracefully
      if (error.code === "23505") {
        return { success: true, message: "You are already on the list!" };
      }
      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return { success: true, message: "You're on the list!" };
  } catch (err) {
    console.error("Server action error:", err);
    return { success: false, message: "Unexpected error occurred." };
  }
}
