export const dateToShow = (date) => {
  var aux = new Date(date);
  var month = withCero(aux.getMonth() + 1);
  var day = withCero(aux.getDate());

  let response = `${day}/${month}/${aux.getFullYear()} - ${withCero(
    aux.getHours()
  )}:${withCero(aux.getMinutes())}hs`;
  return response;
};
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