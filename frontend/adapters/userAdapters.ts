import { CreateUserRequest } from "../types/user";
import { API_ENDPOINTS } from "../utils/apiConfig";

const baseUrl = "http://172.26.47.136:3000";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    console.log("frontend adapter (register) hit");
    return await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
  } catch (error) {
    console.error(error);
    console.warn(error);
  }
};
