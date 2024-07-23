import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const CartData = useSelector((state) => state.allproduct.cart);

  // Helper functions to calculate subtotal, tax, and total
  const Totalval = CartData.map((item)=>item.price).reduce((accum,curr)=>{
    return accum + curr
  },0)
  console.log(Totalval);

  return (
    <div className="container border mx-auto m-5 px-4 ">
      <h1>Shopping Cart</h1>
      {CartData.length > 0 ? (
        <>
          <div className="flex">
            {/* Left side: Cart items */}
            <div className="w-3/4 p-5">
              {CartData.map((item) => (
                <div key={item.id} className="flex mb-4 justify-evenly space-x-3">
                  <div className=" ">
                    <img
                      className="w-40 h-40"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm">Price: $ {item.price}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right side: Order summary */}

            <div className="w-1/4 p-5">
              <h2 className="font-bold mb-4">Order Summary</h2>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm">Subtotal: $ {Totalval} </p>
                <p className="text-sm">Tax: 10% </p>
                <p className="text-lg font-bold mt-2">Total:$ {Totalval}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 mt-4 rounded">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Cart IS Empty</>
      )}
    </div>
  );
};

export default Cart;
