import { createContext, useContext, useEffect, useState } from "react";
import { createProductHandler, deleteProductHandler, getProductsHandler } from "../services/ProductApis";
import toast from "react-hot-toast";
import { getAllOrdersHandler, updateOrderStatusHandler } from "../services/OrderApis";
import { useUserContext } from "./UserContext";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {


    const {accountType} = useUserContext();


    const [allProducts, setAllProducts] = useState([]);
    const [openDeleteProductModal, setOpenDeleteProductModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageEmpty, setImageEmpty] = useState(false);
    const [sizeEmpty, setSizeEmpty] = useState(false);
    const [productData, setProductData] = useState(
        {
            name: '',
            description: '',
            price: '',
            image1: undefined,
            image2: undefined,
            image3: undefined,
            image4: undefined,
            category: 'Men',
            subCategory: 'Topwear',
            sizes: [],
            bestSeller: false,
        }
    );
    const [allOrders,setAllOrders] = useState([]);





    // save current state and track updated state of productData
    const changeHandler = (event) => {
        const { name, type, value, checked, files } = event.target;
        setProductData(prev => {
            if (type === 'file') {
                return { ...prev, [name]: files[0] }
            }
            if (name === "sizes") {
                return {
                    ...prev,
                    sizes: prev.sizes.includes(value)
                        ?
                        prev.sizes.filter(item => item !== value)
                        :
                        [...prev.sizes, value]
                }
            }
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    // create product
    const createProduct = async (event) => {
        setLoading(true);
        try {
            if (productData.image1 === undefined && productData.image2 === undefined && productData.image3 === undefined && productData.image4 === undefined) {
                setImageEmpty(true);
                return;
            }
            if (productData.sizes.length === 0) {
                setSizeEmpty(true);
                return;
            }
            event.preventDefault();
            const response = await createProductHandler(productData);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // get all products
    const getProducts = async () => {
        setLoading(true);
        try {
            const result = await getProductsHandler();
            setAllProducts(result.data.data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // remove a product
    const deleteProduct = async (productId) => {
        setLoading(true);
        try {
            const response = await deleteProductHandler(productId);
            toast.success(response.data.message);
            await getProducts();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // get all orders
    const getAllOrders = async () => {
        setLoading(true);
        try {
            const response = await getAllOrdersHandler();
            setAllOrders(response.data.data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    // update order status
    const updateOrderStatus = async (orderId, orderStatus) => {
        try {
            const response = await updateOrderStatusHandler({orderId,orderStatus});
            await getAllOrders();
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }










    useEffect(() => {
        getProducts();
        if(accountType === 'Admin') getAllOrders();
    }, []);










    const values = {
        allProducts, setAllProducts,
        openDeleteProductModal, setOpenDeleteProductModal,
        loading, setLoading,
        imageEmpty,setImageEmpty,
        sizeEmpty,setSizeEmpty,
        productData,setProductData,
        allOrders,setAllOrders,
        changeHandler,
        createProduct,
        getProducts,
        deleteProduct,
        getAllOrders,
        updateOrderStatus
    }

    return <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
}

export const useProductContext = () => useContext(ProductContext);