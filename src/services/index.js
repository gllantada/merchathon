export const login = (data, callbackSucces, callbackError) => {
  return callbackSucces(mockSellerLogin.payload)
}
export const getOrders = (data, callbackSucces, callbackError) => {
  return callbackSucces(mockOrders.payload)
}
const mockOrders = {
  payload: {
    orders: [
      {
        _id: "kiasdasdasdhfdgihjfgojdlfkg",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av cabildo 3060 5to B"
        },
        date: new Date(),
        product_id: 54545,
        client_cel: 234234234,
        status_code: 2,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      },
      {
        _id: "lkasjhdlskdgjsldkfñ",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av La rioja 3060 5to B",
          lat: 1223434534545,
          long: -342342342342
        },
        date: new Date(),

        status_code: 1,
        product_id: 223234,
        client_cel: 234234234,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      },
      {
        _id: "lkasjhdlskdgjsldkfñ",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av La rioja 3060 5to B",
          lat: 1223434534545,
          long: -342342342342
        },
        date: new Date(),

        status_code: 1,
        product_id: 223234,
        client_cel: 234234234,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      },
      {
        _id: "lkasjhdlskdgjsldkfñ",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av La rioja 3060 5to B",
          lat: 1223434534545,
          long: -342342342342
        },
        date: new Date(),

        status_code: 1,
        product_id: 223234,
        client_cel: 234234234,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      },
      {
        _id: "lkasjhdlskdgjsldkfñ",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av La rioja 3060 5to B",
          lat: 1223434534545,
          long: -342342342342
        },
        date: new Date(),

        status_code: 1,
        product_id: 223234,
        client_cel: 234234234,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      },
      {
        _id: "lkasjhdlskdgjsldkfñ",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av La rioja 3060 5to B",
          lat: 1223434534545,
          long: -342342342342
        },
        date: new Date(),

        status_code: 1,
        product_id: 223234,
        client_cel: 234234234,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      },
      {
        _id: "lkasjhdlskdgjsldkfñ",
        seller_id: "kjsdhfkjsdf",
        address_info: {
          address: "Av La rioja 3060 5to B",
          lat: 1223434534545,
          long: -342342342342
        },
        date: new Date(),

        status_code: 1,
        product_id: 223234,
        client_cel: 234234234,
        seller_cel: 2453453443,
        client_name: "PEdro",
        client_rut: 22342334 - 9
      }

    ]
  }
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