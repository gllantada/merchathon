import * as TYPES from "../types";

export const setUserData = (userData) => {
  return {
    type: TYPES.SET_USER,
    payload: userData,
  };
};
export const setToken = (token) => {
  return {
    type: TYPES.SET_TOKEN,
    payload: token,
  };
};
