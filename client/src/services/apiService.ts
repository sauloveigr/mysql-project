import axios from "axios";

const REGISTER_URL = "http://localhost:3031/users/register";
const LOGIN_URL = "http://localhost:3031/users/login";

export const registerUser = async (userData: {
   email: string;
   password: string;
}) => {
   try {
      const response = await axios.post(REGISTER_URL, userData);
      return response;
   } catch (error) {
      console.error("Error registering user:", error);
      throw error;
   }
};

export const loginUser = async (userData: {
   email: string;
   password: string;
}) => {
   try {
      const response = await axios.post(LOGIN_URL, userData);
      return response;
   } catch (error) {
      console.error("Login error:", error);
      throw error;
   }
};
