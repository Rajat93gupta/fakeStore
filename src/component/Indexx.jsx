import React, { useEffect, useState } from 'react'

import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetProduct } from '../Redux/Action/ProductAction';

const Indexx = () => {
    const[isloding,setisloading]=useState(true)
    
    const product= useSelector((state)=>state.allproduct.product)
    const dispatch =useDispatch()
    console.log(product);

    useEffect(()=>{
        const fakeData= async()=>{
            const data =await axios.get("https://fakestoreapi.com/products")
        console.log(data.data);
         if(data){
            setisloading(false)
            dispatch(SetProduct(data.data))
        }

        }
        fakeData()
    
    },[])
    
  return (
    <div>
        <div className='container mx-auto px-4'>
        <h2 className='text-center m-3'>Products</h2>
            <div className='flex flex-wrap justify-center flex-col md:flex-row -mx-2'>
           
             {isloding ? (
                <div>Loading....</div>
             ):
             (
                <>
                {
                    product.map((item)=>{
                        return(
                            <Card key={item.id} item={item}/>
                        )
                    })
                }

                </>
             )
             }
             </div>
        </div>

      
    </div>
  )
}

export default Indexx

