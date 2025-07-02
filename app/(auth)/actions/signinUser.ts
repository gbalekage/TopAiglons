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

    if (response.status !== 200) {
      throw new Error("Failed to sign in");
    }

    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.error || error.message || "Failed to sign in";
    throw new Error(message);
  }
}
