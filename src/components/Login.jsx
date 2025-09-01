import { useUserContext } from "../context/UserContext";

const Login = () => {

    const {changeHandler,adminLogin,loginCredentials} = useUserContext();



  return (
    <div className="h-screen w-screen flex justify-center items-center bg-pink-50">
        <form onSubmit={adminLogin} className="flex flex-col justify-center items-center gap-5 px-7 sm:px-20 py-10 sm:py-15 rounded bg-white text-black border shadow-2xl shadow-black">
            <p className="text-xl sm:text-3xl text-pink-700 font-bold">WELCOME TO ADMIN PANEL</p>
            <input type="email" name="email" id="email" onChange={changeHandler} value={loginCredentials.email} placeholder="your@gmail.com" className="w-full"/>
            <input type="password" name="password" id="password" onChange={changeHandler} value={loginCredentials.password} placeholder="password" className="w-full"/>
            <button className="w-full bg-black text-white border rounded-md hover:bg-pink-800 active:bg-pink-800 px-10 py-2 cursor-pointer tracking-wider">Login</button>
        </form>
    </div>
  )
}

export default Login