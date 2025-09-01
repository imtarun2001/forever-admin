import { axiosInstance } from "./AxiosInstance";

const getAllOrders = () => axiosInstance.get(`/order/getAllOrders`);
const updateOrderStatus = (data) => axiosInstance.put(`/order/updateOrderStatus`,data);

export const getAllOrdersHandler = async () => {
    try {
        const response = await getAllOrders();
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}

export const updateOrderStatusHandler = async (data) => {
    try {
        const response = await updateOrderStatus(data);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}