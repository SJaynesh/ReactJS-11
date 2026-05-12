import axios from "axios";

export const loginAdmin = async (data) => {
    try {
        const res = await axios.post("http://localhost:8000/api/auth/admin/login", data);

        console.log("Response : ", res.data);

        return res.data;
    } catch (error) {
        console.log("Admin Login Failed");
        console.log("Error : ", error);
    }
}