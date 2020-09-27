import * as STATUS from "./../constants/order_status"
export const dateToShow = (date) => {
  var aux = new Date(date);
  var month = withCero(aux.getMonth() + 1);
  var day = withCero(aux.getDate());

  let response = `${day}/${month}/${aux.getFullYear()} - ${withCero(
    aux.getHours()
  )}:${withCero(aux.getMinutes())}hs`;
  return response;
};
export const getClassesForStatus = (status) => {
  switch (status) {
    case (STATUS.IN_DELIVERY):
      return "onway"
    case (STATUS.RETURNING):
      return "onreturn"
    case (STATUS.DELIVERED):
      return "delivered"
    default:
      return false;
  }
}
export const getTextForStatus = (status) => {
  switch (status) {
    case (STATUS.IN_DELIVERY):
      return "EN CAMINO"
    case (STATUS.RETURNING):
      return "DE REGRESO"
    case (STATUS.DELIVERED):
      return "ENTREGADO"
    default:
      return false;
  }
}
export const getRadioObject = () => {
  return [{
      label: "Juan Pedro medel",
      value: "1"
    }, {
      label: "Juan Pedro menendez ",
      value: "3"
    },
    {
      label: "Juan Pedro medel",
      value: "4"
    }, {
      label: "Juan Pedro menendez ",
      value: "5"
    }

  ]
}
const withCero = (date) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};