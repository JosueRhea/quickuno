import { auth } from "@/lib/db";
import { UserCredential, signInAnonymously } from "firebase/auth";
import { ApiResponse } from "./types";

export async function signIn(): ApiResponse<UserCredential> {
  try {
    const data = await signInAnonymously(auth);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: { message: "Something went wrong" } };
  }
}
