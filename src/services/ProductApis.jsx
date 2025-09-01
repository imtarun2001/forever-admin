import { axiosInstance } from "./AxiosInstance";

const createProduct = (data) => axiosInstance.post(`product/createProduct`,data);

const getProducts = () => axiosInstance.get(`product/getProducts`);

const deleteProduct = (productId) => axiosInstance.delete(`product/deleteProduct/${productId}`);

export const createProductHandler = async (productData) => {
    try {
        const formData = new FormData();
        formData.append("name", productData.name);
        formData.append("description", productData.description);
        formData.append("price", productData.price);
        formData.append("category", productData.category);
        formData.append("subCategory", productData.subCategory);
        formData.append("sizes", JSON.stringify(productData.sizes));
        formData.append("bestSeller", productData.bestSeller);
    
        if (productData.image1) formData.append("image1", productData.image1);
        if (productData.image2) formData.append("image2", productData.image2);
        if (productData.image3) formData.append("image3", productData.image3);
        if (productData.image4) formData.append("image4", productData.image4);
    
        const response = await createProduct(formData);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}

export const getProductsHandler = async () => {
    try {
        const response = await getProducts();
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}

export const deleteProductHandler = async (productId) => {
    try {
        const response = await deleteProduct(productId);
        return response;
    } catch (error) {
       throw new Error(error.response?.data?.message || error.message);
    }
}