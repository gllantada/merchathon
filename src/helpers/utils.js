export const dateToShow = (date) => {
  var aux = new Date(date);
  var month = withCero(aux.getMonth() + 1);
  var day = withCero(aux.getDate());

  let response = `${day}/${month}/${aux.getFullYear()} - ${withCero(
    aux.getHours()
  )}:${withCero(aux.getMinutes())}hs`;
  return response;
};
export const getObjectToUpdate = (nav, idList) => {
  let aux = idList.map(elm => {

    return {
      order_id: elm,
      order_status: nav + 2
    }
  })
  return aux

}
export const getQuery = (nav, repartos) => {
  if (repartos) return "others=1"
  else return "order_status=" + (nav + 1)

}
export const getClassesForStatus = (status) => {
  if (status === 4 || status === 5 || status === 51 || status === 52)
    return "onway";
  if (status === 6) return "delivered"
  if (status === 7 || status === 10) return "onreturn"
  else return false

}
export const getTextForStatus = (status) => {
  if (status === 4) return "ASIGNADO";
  if (status === 5 || status === 51 || status === 52)
    return "EN CAMINO";
  if (status === 6) return "ENTREGADO"
  if (status === 7) return "NO ENTREGADO";
  if (status === 10) return "CANCELADO"
  else return false
}
export const getRadioObject = (data) => {
  let aux = data.filter(elm => {

    if (elm.dealer_status === 0)
      return elm
    else return null
  })

  return aux.map(elm => {
    return {
      label: elm.name,
      value: elm._id
    }
  });

}
export const getObjectToUpdateOrders = (data, type) => {
  let aux = [{
    order_id: "5f6ffc48fe7d1a0006531962",
    order_status: 3
  }]

  return aux
}
const withCero = (date) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};