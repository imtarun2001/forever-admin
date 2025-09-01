import { useProductContext } from "../context/ProductContext"
import Spinner from "../components/Spinner";

const Orders = () => {

  const {loading,allOrders,updateOrderStatus} = useProductContext();
  console.log(allOrders);

  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5">
      <div className="text-xl sm:text-3xl font-bold text-nowrap">All Orders List</div>
      {
        loading ?

        <Spinner/> :

        <div className="w-full flex flex-wrap sm:flex-col justify-center items-start gap-5 text-sm text-gray-600">
          {
            allOrders.map((order,index) => (
              <div key={index} className="border-2 border-gray-400 sm:w-full flex flex-col sm:flex-row justify-center sm:justify-between items-start gap-2.5 sm:gap-0 p-3 md:p-6">

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col justify-start items-center gap-1.5">
                    {
                      order.itemsOrdered.map((item,itemIndex) => (
                        <div key={itemIndex} className="flex justify-center items-start gap-1.5">
                          <img src={item.images[0]} alt="" className="w-10"/>
                          <div className="flex flex-col">
                            <p>{item.name}</p>
                            <p><b>{item.price}💲</b> X <b>{item.quantity}</b> - <b>{item.size}</b></p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  
                  <div className="flex flex-col justify-center items-start gap-1.5">
                    <b className="text-lg text-black">{order.firstName + ' ' + order.lastName}</b>
                    <p>{order.street},</p>
                    <p>{order.city + ', ' + order.state + ', ' + order.country + ', ' + order.zipCode}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <p>Items : <b>{order.itemsOrdered.length}</b></p>
                  
                  <div className="font-extrabold">{order.amount + '💲'}</div>

                  <div className="flex flex-col gap-1.5">
                    <p>Method : <b>{order.paymentMethod.toUpperCase()}</b></p>
                    <p>Payment : <b>{order.paymentStatus ? `Paid` : `Pending`}</b></p>
                    <p>Date : <b>{new Date(order.createdAt).toLocaleDateString()}</b></p>
                  </div>
                </div>


                <select name="orderStatus" onChange={(event) => updateOrderStatus(order._id,event.target.value)} value={order.orderStatus} className="px-3 py-1.5 border outline-none bg-gray-100 hover:bg-gray-300 cursor-pointer text-gray-700 rounded">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>





              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Orders