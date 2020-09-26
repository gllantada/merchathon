export const dateToShow = (date) => {
  var aux = new Date(date);
  var month = withCero(aux.getMonth() + 1);
  var day = withCero(aux.getDate());

  let response = `${day}/${month}/${aux.getFullYear()} - ${withCero(
    aux.getHours()
  )}:${withCero(aux.getMinutes())}hs`;
  return response;
};
const withCero = (date) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};