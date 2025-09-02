import { createContext, useContext, useEffect, useRef, useState } from "react";
import { adminLoginHandler, adminLogoutHandler } from "../services/AdminApis";
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
    const [accountType,setAccountType] = useState(localStorage.getItem("accountType") ? localStorage.getItem("accountType") : null);
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
            if(accountType === null) {
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
            } else {
                toast.error(`already logged in`);
                return;
            }
        } catch (error) {
            toast.error(error.message);
        }
    }




    // logout handler
    const adminLogout = async () => {
        try {
            if(accountType === 'Admin') {
                const response = await adminLogoutHandler();
                localStorage.removeItem("accountType");
                setAccountType(null);
                setOpenConfirmLogoutModal(false);
                toast.success(response.data.message);
            } else {
                toast.error(`you are not logged in`);
            }
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
        adminLogout,
    };

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);