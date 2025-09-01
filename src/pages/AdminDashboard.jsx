import { FiTrendingUp, FiShoppingCart, FiUsers, FiPackage } from "react-icons/fi";
import { assets } from "../assets/admin_assets/assets";

const AdminDashboard = () => {
    return (
        <div className="w-full h-full flex flex-col gap-8">

            {/* Welcome Banner */}
            <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg p-8 shadow-lg flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Welcome Back, Admin!</h1>
                    <p className="text-lg opacity-90">
                        Here's a quick overview of your store.
                    </p>
                </div>
                <img
                    src={assets.logo}
                    alt="Dashboard Illustration"
                    className="mt-4 md:mt-0 w-[max(20%,50px)]"
                />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
                    <FiTrendingUp className="text-indigo-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Total Sales</p>
                        <p className="font-bold text-xl">1,245</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
                    <FiShoppingCart className="text-green-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Orders</p>
                        <p className="font-bold text-xl">587</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
                    <FiUsers className="text-yellow-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Customers</p>
                        <p className="font-bold text-xl">892</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
                    <FiPackage className="text-pink-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Products</p>
                        <p className="font-bold text-xl">245</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity / Placeholder */}
            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                <p className="text-gray-500">
                    You can see the latest orders, products added, and customer activity here.
                </p>
            </div>

        </div>
    )
}

export default AdminDashboard