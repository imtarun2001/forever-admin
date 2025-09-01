import { MdDeleteSweep } from "react-icons/md"
import { useProductContext } from "../context/ProductContext"

const Product = ({product,index}) => {

    const {deleteProduct} = useProductContext();

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center border rounded p-2 bg-gray-100">
        <p className="w-[5%] hidden sm:flex justify-center items-center">{index + 1}.</p>
        <div className="w-full sm:w-[10%] flex justify-center items-center">
            <img src={product.images[0]} alt="" className="w-[25%] sm:w-[55%] md:w-[62%] lg:w-[70%]"/>
        </div>
        <p className="w-full sm:w-[30%] flex justify-center items-center text-center font-bold">{product.name}</p>
        <p className="w-full sm:w-[10%] flex justify-center items-center text-gray-400">{product.category}</p>
        <p className="w-full sm:w-[10%] flex justify-center items-center">💲{product.price}</p>
        <button className="w-1/3 sm:w-[10%] flex justify-center items-center border px-1 py-2 rounded bg-emerald-400 cursor-pointer hover:bg-pink-400 active:bg-pink-400"
        onClick={() => deleteProduct(product._id)}>
            <MdDeleteSweep/>
        </button>
    </div>
  )
}

export default Product