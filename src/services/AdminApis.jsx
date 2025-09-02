import { axiosInstance } from "./AxiosInstance";

const adminLogin = (data) => axiosInstance.post(`/user/adminLogin`,data);
const adminLogout = () => axiosInstance.post(`user/adminLogout`);

export const adminLoginHandler = async (loginCredentials) => {
    try {
        const response = await adminLogin(loginCredentials);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}



export const adminLogoutHandler = async () => {
    try {
        const response = await adminLogout();
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}