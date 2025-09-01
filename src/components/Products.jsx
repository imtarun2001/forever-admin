import Product from "./Product"

const Products = ({allProducts}) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <div className="w-full hidden sm:flex justify-between items-center px-2 py-1 border bg-gray-400">
        <p className="w-[5%] flex justify-center items-center">Sl.</p>
        <p className="w-[10%] flex justify-center items-center">Image</p>
        <p className="w-[30%] flex justify-center items-center">Name</p>
        <p className="w-[10%] flex justify-center items-center">Category</p>
        <p className="w-[10%] flex justify-center items-center">Price</p>
        <p className="w-[10%] flex justify-center items-center">Action</p>
      </div>
      {
        allProducts.map((product,index) => <Product key={product._id} product={product} index={index}/>)
      }
    </div>
  )
}

export default Products