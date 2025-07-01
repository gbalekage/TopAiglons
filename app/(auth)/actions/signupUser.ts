// app/signup/actions/signupUser.ts
import axios from "axios";

export async function signupUser(formData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  try {
    const response = await axios.post("/api/auth/signup", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.error || error.message || "Failed to sign up";
    throw new Error(message);
  }
}
