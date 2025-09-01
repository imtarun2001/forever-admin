import { assets } from "../assets/admin_assets/assets"
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const sidebarMenus = [
        {
            name: 'Dashboard',
            image: assets.dashboard_icon,
            path: '/',
        },
        {
            name: 'Add Items',
            image: assets.add_icon,
            path: '/add',
        },
        {
            name: 'List Items',
            image: assets.list_icon,
            path: '/list'
        },
        {
            name: 'Orders',
            image: assets.orders_icon,
            path: '/orders'
        },
    ];

  return (
    <div className="flex flex-col justify-start items-end gap-5 w-[15%] pt-5">
        {
            sidebarMenus.map((sidebarMenu,index) => (
                <NavLink to={sidebarMenu.path} key={index} className="w-full lg:w-[90%] border-y border-l border-gray-300 flex justify-center sm:justify-between items-center px-1.5 py-1 text-gray-600 cursor-pointer">
                    <img src={sidebarMenu.image} alt="" className={`${index === 1 ? null : `w-7`}`}/>
                    <p className="hidden sm:block w-[60%] text-xs lg:text-base">{sidebarMenu.name}</p>
                </NavLink>
            ))
        }
    </div>
  )
}

export default Sidebar