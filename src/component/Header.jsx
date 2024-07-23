import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const CartData = useSelector((state) => state.allproduct.cart);
  // console.log(CartData);
  const cartLength = CartData.length;
  // console.log(cartLength);

  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const handleCart = () => {
    navigate("/cart");
    setMobileMenuVisible(!isMobileMenuVisible);
  };
  return (
    <>
      <div className="w-full  bg-red-400 p-2">
        <div className="container mx-auto flex justify-between items-center py-5">
          <Link to="/"><div className="Logo font-bold ">FakeStore</div></Link>

          <nav>
            <ul className=" hidden md:flex space-x-10 text-white font-bold text-lg ">
              <Link to="/">
                {" "}
                <li className="hover:text-green-200">Home</li>
              </Link>
              <li className="hover:text-green-200">Product</li>
              <li className="hover:text-green-200">Contact</li>
              <Link to="/About"><li className="hover:text-green-200">About</li></Link>
            </ul>
          </nav>
          <div
            className="space-y-1 md:hidden cursor-pointer z-30"
            onClick={toggleMobileMenu}
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
          {isMobileMenuVisible && (
            
            <ul className="md:hidden bg-black absolute left-0 top-16 w-full p-10 text-white space-y-8 rounded-b-3xl text-center z-30">
              <li onClick={toggleMobileMenu}>Home</li>
              <li onClick={toggleMobileMenu}>Product</li>
              <li onClick={toggleMobileMenu}>Contact</li>
              <li onClick={toggleMobileMenu}>About</li>
              <li onClick={handleCart}>Cart</li>
              
            </ul>
            
          )}

          <div
            className="relative cursor-pointer hidden md:block "
            onClick={handleCart}
          >
            <IoCartOutline size={26} className=" " />
            <span className="absolute top-[-25px] right-[-25px] h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full text-xs z-20 ">
              {cartLength}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
