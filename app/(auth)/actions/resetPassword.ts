import axios from "axios";

export async function resetPassword({
  password,
  token,
}: {
  password: string;
  token: string;
}) {
  try {
    const res = await axios.post(
      `/api/auth/resetpassword/${token}`,
      { password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status !== 200) {
      throw new Error(res.data?.error || "Reset failed");
    }

    return res.data;
  } catch (err: any) {
    const message =
      err.response?.data?.error || err.message || "Something went wrong";
    throw new Error(message);
  }
}
