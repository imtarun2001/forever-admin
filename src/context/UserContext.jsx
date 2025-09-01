import { createContext, useContext, useEffect, useRef, useState } from "react";
import { adminLoginHandler, logoutAdminHandler } from "../services/AdminApis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const navigate = useNavigate();
    
    
    const [loginCredentials, setLoginCredentials] = useState(
        {
            email: '',
            password: ''
        }
    );
    const [accountType,setAccountType] = useState(localStorage.getItem("accountType"));
    const openConfirmLogoutModalRef = useRef(null);
    const [openConfirmLogoutModal, setOpenConfirmLogoutModal] = useState(false);





    // click outside modal to close the modal
    useEffect(() => {
        const clickAnyWhereToCloseModal = (event) => openConfirmLogoutModal && openConfirmLogoutModalRef.current && !openConfirmLogoutModalRef.current.contains(event.target) && setOpenConfirmLogoutModal(false);
        document.addEventListener("mousedown", clickAnyWhereToCloseModal);
        return () => document.removeEventListener("mousedown", clickAnyWhereToCloseModal);
    }, [openConfirmLogoutModal]);



    // login admin handler
    const changeHandler = (event) => {
        const { name, type, value, checked } = event.target;

        setLoginCredentials(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    }

    const adminLogin = async (event) => {
        try {
            event.preventDefault();
            const response = await adminLoginHandler(loginCredentials);
            localStorage.setItem("accountType",response.data.data);
            setAccountType(response.data.data);
            setLoginCredentials(prev => (
                {
                    ...prev,
                    email: '',
                    password: ''
                }
            ));
            navigate('/');
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }




    // logout handler
    const logoutAdmin = async () => {
        try {
            const response = await logoutAdminHandler();
            localStorage.setItem("accountType",'');
            setAccountType('');
            setOpenConfirmLogoutModal(false);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }



    const values = {
        navigate,
        loginCredentials,setLoginCredentials,
        accountType,setAccountType,
        openConfirmLogoutModalRef,
        openConfirmLogoutModal, setOpenConfirmLogoutModal,
        changeHandler,
        adminLogin,
        logoutAdmin,
    };

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);