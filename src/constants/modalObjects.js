export const successResponsive = (message) => {
  return {
    message: message,
    style: {
      padding: "17px",
      borderRadius: "6px",
      height: "56px",
      width: "calc(100% - 48px)",
      boxShadow: "0 8px 28px 0 #49112929",
      minWidth: "auto",
    },
    type: "success",
    // button: true,
    distanceTop: 35,
  };
};
export const errorResponsive = (message) => {
  return {
    message: message,
    style: {
      padding: "17px",
      borderRadius: "6px",
      height: "56px",
      width: "calc(100% - 48px)",
      boxShadow: "0 8px 28px 0 #49112929",
      minWidth: "auto"
    },
    distanceTop: 35,
  };
};