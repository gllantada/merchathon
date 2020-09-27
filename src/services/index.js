import {
  HOST
} from "./../constants/routes"
import axios from "axios"
// import {
//   order
// } from "./../mocks/order"
export const getOrders = (query, callbacksucces, callbackerror) => {
  try {
    axios
      .get(`${HOST}/orders?${query}`)
      .then(function (response) {
        callbacksucces(response.data);
      })
      .catch(function (error) {
        callbackerror(error);
      });
  } catch (error) {
    callbackerror(error);
  }
};
export const getOrderDetail = (data, callbacksucces, callbackerror) => {

  // return callbacksucces(order);
  try {
    axios
      .get(`${HOST}/orders/${data}`)
      .then(function (response) {
        callbacksucces(response.data);
      })
      .catch(function (error) {
        callbackerror(error);
      });
  } catch (error) {
    callbackerror(error);
  }
};
export const updateOrders = (data, callbacksucces, callbackerror) => {
  debugger
  try {
    axios
      .post(`${HOST}/orders/update-orders`, {
        payload: data
      })
      .then(function (response) {
        callbacksucces(response.data);
      })
      .catch(function (error) {
        callbackerror(error);
      });
  } catch (error) {
    callbackerror(error);
  }
};
export const updateDelivers = (data, callbacksucces, callbackerror) => {
  debugger
  try {
    axios
      .post(`${HOST}/dealers/update-orders/${data._id}`, {
        payload: data.body
      })
      .then(function (response) {
        callbacksucces(response.data);
      })
      .catch(function (error) {
        callbackerror(error);
      });
  } catch (error) {
    callbackerror(error);
  }
};
export const getDelivers = (callbacksucces, callbackerror) => {
  try {
    axios
      .get(`${HOST}/dealers`)
      .then(function (response) {
        callbacksucces(response.data);
      })
      .catch(function (error) {
        callbackerror(error);
      });
  } catch (error) {
    callbackerror(error);
  }
};


export const login = (data, callbackSucces, callbackError) => {
  return callbackSucces(mockSellerLogin.payload)
}


const mockSellerLogin = {
  payload: {
    user_name: "Juan Pedro Medel",
    email: "jpmedel@gmail.com",
    rol: "SELLER",
    jwt: {
      access_token: "lkajslfkdsjlksjdfljsdlkf"
    }
  }
}
const mockColaboratorLogin = {
  payload: {
    user_name: "Pedro Alfonzo Gutierrez",
    email: "pagutierrez@gmail.com",
    product_id: "",
    rol: "COLABORATOR",
    jwt: {
      access_token: "lkajslfkdsjlksjdfljsdlkf"
    }
  }
}