import * as TYPES from "../types";

export const setSelectedOrders = (orders) => {
  return {
    type: TYPES.SET_SELECTED_ORDERS,
    payload: orders,
  };
};
export const setOrders = (orders) => {
  return {
    type: TYPES.SET_ORDERS,
    payload: orders,
  };
};
// export const setToken = (token) => {
//   return {
//     type: TYPES.,
//     payload: token,
//   };
// };
