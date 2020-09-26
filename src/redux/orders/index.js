import * as TYPES from "./types";

const initialState = {

  selectedOrders: [],
  orders: []

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_SELECTED_ORDERS:
      return {
        ...state,
        selectedOrders: payload,
      };
    case TYPES.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    // case TYPES.SET_TOKEN:
    //   return {
    //     ...state,
    //     token: payload,
    //   };
    default:
      return state;
  }
};
