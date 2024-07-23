import { ActionTypes } from "../constants/Action-types"


export const SetProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products
    }
}
export const SelectProduct=(products)=>{
    return{
        type:ActionTypes.SELECT_PRODUCT,
        payload:products
    }
}

export const AddCart=(product)=>{
    return{
        type:ActionTypes.Add_CART,
        payload:product
    }

}
export const RemovePorduct=()=>{
    return{
        type:ActionTypes.REMOVE_PRODUCT,
        
    }

}