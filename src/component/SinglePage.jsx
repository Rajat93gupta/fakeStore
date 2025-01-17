import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddCart, SelectProduct,RemovePorduct } from "../Redux/Action/ProductAction";

const SinglePage = () => {
  const Product = useSelector((state) => state?.SingleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(SelectProduct(response.data));
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (id && id !== "") getSingleProduct();
    return ()=>{
      dispatch(RemovePorduct())
    }
  }, [id]);

  
  const { image, title, price, description } = Product;
  if (!Product) {
    return <>Loading...</>; 
  }

  
  const CartData = useSelector((state) => state.allproduct.cart);
  // console.log(CartData);

  const AddCartProduct = () => {
    const Matchdata = CartData.find((i) => i.id === Product.id);

    // console.log(Matchdata);
    if (Matchdata) {
      alert("datais already Added to Cart");
    } else {
      dispatch(AddCart(Product));
      navigate("/cart");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 h-[100vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img className=" h-[460px] object-fill" src={image} alt="Product Image" />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button onClick={AddCartProduct} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">$ {price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
              <div className="flex items-center mt-2">
                {/* Add your color buttons here */}
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
              <div className="flex items-center mt-2">
                {/* Add your size buttons here */}
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
