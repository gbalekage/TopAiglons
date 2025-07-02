// app/signup/actions/signupUser.ts
import axios from "axios";

export async function verifyEmail(formData: { code: string }) {
  try {
    const response = await axios.post("/api/auth/verify-email", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.log("Error verifying email:", error);
    const message =
      error.response?.data?.error || error.message || "Failed to verify email";
    throw new Error(message);
  }
}
