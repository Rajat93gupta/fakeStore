import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { AddCart } from "../Redux/Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";

const Card = ({ item }) => {
 

  return (
    <div className="w-[100%] border p-2 m-2 md:w-1/5">
      <Link to={`/product/${item.id}`}> <img className="w-80 h-80" src={item.image} alt="" /></Link>
      <div className="flex justify-between pt-4">
        <p>Price : ${item.price}</p>
        <p>Rating :{item.rating.rate}</p>
      </div>
      <p className="font-bold">{item.title}</p>

    
    </div>
  );
};

export default Card;
