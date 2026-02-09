"use server"

import { signIn } from "@/auth";

const credentialsLogin = async ({ email, password }) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/bunnx-admin"
    });

    // console.log("Login result:", result);
    

    if (!result?.error) {
      return { success: true, url: "/bunnx-admin" };
    }

    return { error: "Invalid credentials" };
  } catch (err) {
    console.error("Login error:", err);
    
    // Handle redirect error
    if (err.message?.includes("NEXT_REDIRECT")) {
      return { success: true, url: "/bunnx-admin" };
    }

    return { 
      error: err.type === "CredentialsSignin" 
        ? "Invalid credentials" 
        : "Something went wrong" 
    };
  }
};

export default credentialsLogin;