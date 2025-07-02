import axios from "axios";

export async function signinUser(formData: {
  email: string;
  password: string;
}) {
  try {
    const response = await axios.post("/api/auth/signin", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response Data", response.data);
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.error || error.message || "Failed to sign in";
    throw new Error(message);
  }
}
