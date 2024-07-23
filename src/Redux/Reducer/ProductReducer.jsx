import { ActionTypes } from "../constants/Action-types";

const initialState = {
  product: [],
  cart: [],
};
export const ProdutReducet = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.Add_CART:
      return { ...state, cart: [...state.cart, payload] };
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const SelectProdutReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
