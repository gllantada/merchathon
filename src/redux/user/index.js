import * as TYPES from "./types";

const initialState = {
  user: { name: "" },
  token: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_USER:
      return {
        ...state,
        user: payload,
      };
    case TYPES.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
