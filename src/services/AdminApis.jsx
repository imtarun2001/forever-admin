import { axiosInstance } from "./AxiosInstance";

const adminLogin = (data) => axiosInstance.post(`/user/adminLogin`,data);
const logoutAdmin = () => axiosInstance.post(`user/logoutUser`);

export const adminLoginHandler = async (loginCredentials) => {
    try {
        const response = await adminLogin(loginCredentials);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}



export const logoutAdminHandler = async () => {
    try {
        const response = await logoutAdmin();
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}