import { combineReducers } from "redux";
import { ProdutReducet, SelectProdutReducer } from "./ProductReducer";

const reducers = combineReducers({
    allproduct:ProdutReducet,
    SingleProduct:SelectProdutReducer
   
})

export default reducers