import { assets } from "../assets/admin_assets/assets"
import { useUserContext } from "../context/UserContext"

const Navbar = () => {

  const {setOpenConfirmLogoutModal} = useUserContext();

  return (
    <div className="w-full flex justify-between items-center px-5 py-1 border-b border-gray-300 relative">
        <img src={assets.logo} className="w-[max(10%,80px)]" alt="" />
        <button className="bg-pink-200 border rounded md:shadow-lg md:shadow-gray-700 hover:bg-pink-300 px-1 py-0.5 md:px-2.5 md:py-1 cursor-pointer tracking-tighter text-sm" onClick={() => setOpenConfirmLogoutModal(true)}>Log out</button>
    </div>
  )
}

export default Navbar