import Spinner from "../components/Spinner";
import Products from "../components/Products";
import { useProductContext } from "../context/ProductContext";

const List = () => {

  const {allProducts,loading} = useProductContext();

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      <div className="text-xl sm:text-3xl font-bold text-nowrap">All Products List</div>
      {
        loading ?
        <Spinner/> : 
        <div className="w-full">
          {
            allProducts.length === 0 ?
            <span>No Products Found</span> :
            <Products allProducts={allProducts}/>
          }
        </div>
      }
    </div>
  )
}

export default List