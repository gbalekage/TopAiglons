// app/(auth)/actions/forgotPassword.ts
import axios from "axios";

export async function forgetPassword(formData: { email: string }) {
  try {
    const response = await axios.post("/api/auth/forgotpassword", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(response.data?.error || "Failed to send reset email");
    }

    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.error || error.message || "Something went wrong";
    throw new Error(message);
  }
}
