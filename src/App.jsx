import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Login from "./components/Login"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import { useUserContext } from "./context/UserContext"
import AdminDashboard from "./pages/AdminDashboard"

const App = () => {

  const {accountType,openConfirmLogoutModalRef,openConfirmLogoutModal,setOpenConfirmLogoutModal,logoutAdmin} = useUserContext();

  if (accountType === 'Admin') {
    return (
      <div className={`w-screen flex flex-col justify-start items-center relative`}>
        <Navbar/>
        <div className="w-full flex justify-center items-start">
          <Sidebar />
          <div className="w-[85%] min-h-screen border-l border-gray-300 px-10 py-7">
            <Routes>
              <Route path="/" element={<AdminDashboard/>}/>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
        {
          openConfirmLogoutModal &&
          <div className="fixed h-screen w-screen flex justify-center items-center">
            <div className="absolute h-full w-full bg-black opacity-85"></div>
            <div className="absolute flex flex-col border-2 bg-white border-black justify-center items-start gap-10 px-10 py-7 rounded" ref={openConfirmLogoutModalRef}>
              <p className="text-xl">Do you really want to log out ?</p>
              <div className="w-full flex justify-end items-center gap-5">
                <button className="bg-pink-200 border rounded-md hover:bg-pink-300 px-5 py-2 cursor-pointer tracking-widest" onClick={logoutAdmin}>Yes</button>
                <button className="bg-pink-200 border rounded-md hover:bg-pink-300 px-5 py-2 cursor-pointer tracking-widest" onClick={() => setOpenConfirmLogoutModal(false)}>No</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
  else {
    return (
      <Login/>
    )
  }

}

export default App