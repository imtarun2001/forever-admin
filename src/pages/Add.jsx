import { assets } from "../assets/admin_assets/assets"
import { useProductContext } from "../context/ProductContext";

const Add = () => {

  const { imageEmpty, sizeEmpty, productData, changeHandler, createProduct } = useProductContext();

  const images = ['image1', 'image2', 'image3', 'image4'];






  return (
    <form onSubmit={createProduct} className="w-full flex flex-col items-start gap-5">

      {/* upload images */}
      <div>
        <div className="flex justify-start items-center gap-2.5">
          <p className="mb-2">Upload Image</p>
          <p className={`${imageEmpty ? `block` : `hidden`} mb-2 text-sm text-red-600`}>Atleast one image is required</p>
        </div>
        <div className="flex gap-2">
          {
            images.map((image) => (
              <label key={image} htmlFor={image}>
                {
                  productData[image] === undefined ?
                    <img src={assets.upload_area} alt="" className="w-20" />
                    :
                    <div className="w-20 h-full border flex flex-col justify-center items-center"><span>{image}</span><span>{productData[image].name}</span></div>
                }
                <input type="file" name={image} id={image} hidden onChange={changeHandler} />
              </label>
            ))
          }
        </div>
      </div>






      {/* product name */}
      <div className="w-full">
        <p>Product Name</p>
        <input type="text" name="name" id="name" onChange={changeHandler} value={productData.name} placeholder="Type here" required className="w-full max-w-[500px] px-3 py-2" />
      </div>






      {/* product description */}
      <div className="w-full">
        <p>Product Description</p>
        <textarea name="description" id="description" onChange={changeHandler} value={productData.description} placeholder="Type here" required className="w-full max-w-[500px] px-3 py-2" />
      </div>








      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

        {/* product category */}
        <div>
          <p className="mb-2">Product Category</p>
          <select name="category" id="category" onChange={changeHandler} value={productData.category} required className="w-full">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* product type */}
        <div>
          <p className="mb-2">Product Type</p>
          <select name="subCategory" id="subCategory" onChange={changeHandler} value={productData.subCategory} required className="w-full">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* product price */}
        <div>
          <p className="mb-2">Product Price</p>
          <input className="w-full sm:w-[120px]" type="number" name="price" id="price" required onChange={changeHandler} value={productData.price} placeholder="25" />
        </div>

      </div>





      {/* product sizes */}
      <div>
        <div className="flex justify-start items-center gap-2.5">
          <p className="mb-2">Product Sizes</p>
          <p className={`${sizeEmpty ? `block` : `hidden`} mb-2 text-sm text-red-600`}>Atleast one size is required</p>
        </div>
        <div className="flex gap-3">
          {
            ['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <label key={size} htmlFor={size} className="bg-slate-200 px-3 py-1 text-center active:bg-slate-400 cursor-pointer w-[50px]">
                <input
                  type="checkbox"
                  name="sizes"
                  id={size}
                  key={size}
                  onChange={changeHandler}
                  value={size}
                  checked={productData.sizes.includes(size)}
                  className="hidden" />
                {size}
              </label>
            ))
          }
        </div>
      </div>





      {/* best seller */}
      <div className="flex gap-2 mt-2">
        <input type="checkbox" name="bestSeller" id="bestSeller" onChange={changeHandler} checked={productData.bestSeller} />
        <label htmlFor="bestSeller" className="cursor-pointer">Best Seller</label>
      </div>




      {/* create product */}
      <button className="w-28 py-2 mt-4 cursor-pointer bg-black text-white">CREATE</button>



    </form>
  )
}

export default Add