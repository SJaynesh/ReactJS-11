import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth/admin";
const LOGIN = "/login";
const FORGOT_PASSWORD = "/forgot-password";

export const loginAdmin = async (data: any) => {
    try {
        const res = await axios.post(BASE_URL + LOGIN, data);

        console.log("Response : ", res.data);

        return res.data;
    } catch (error) {
        console.log("Admin Login Failed");
        console.log("Error : ", error);
    }
}

export const forgotPasswordAdmin = async (email: string) => {
    try {
        console.log("Forgot Password Method");

        const res = await axios.post(BASE_URL + FORGOT_PASSWORD, { email });

        console.log("Response : ", res.data);

        return res.data;
    } catch (error) {
        console.log("Admin Login Failed");
        console.log("Error : ", error);
    }
}