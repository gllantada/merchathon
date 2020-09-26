import * as commonTypes from "./actionTypes";
const initialState = {
  errorMessage: "",
  isLoading: false,
  router: {
    isAllowed: true,
    redirectTo: "",
  },
  snackBar: {
    showSnackBar: false,
    title: "",
    type: "error",
    //    icon: '',
    //    imgSrc: '',
  },
  hasError: {},
  snackBarResult: "",
  modal: {
    title: "",
    showModal: false,
    paragraph: "",
    subtitle: "",
    imgSrc: "",
    firstButtonClass: "",
    firstButtonText: "",
    respOnClickFirst: "",
    showSecondButton: false,
    secondButtonClass: "",
    secondButtonText: "",
    respOnClickSecond: "",
  },
  modalResult: "",
  legalText: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case commonTypes.SHOW_ERR_MSG:
      let snackBar = action.payload;
      snackBar.showSnackBar = true;
      //timer = 3000,
      return {
        ...state,
        errorMessage: action.payload,
        snackBar,
      };
    case commonTypes.SHOW_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case commonTypes.HIDE_ON_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case commonTypes.SET_ROUTER:
      let router = action.payload;
      return {
        ...state,
        router,
      };
    case commonTypes.SET_MODAL_DATA_AND_SHOW:
      let modal = action.payload;
      modal.showModal = true;
      return {
        ...state,
        modal,
      };
    case commonTypes.SET_MODAL_RESULT:
      let modalResult = action.payload;
      return {
        ...state,
        modalResult,
      };
    case commonTypes.HIDE_MODAL:
      return {
        ...state,
        modal: initialState.modal,
      };
    case commonTypes.SET_SNACKBAR_DATA_AND_SHOW:
      let snackBar2 = action.payload;
      snackBar2.showSnackBar = true;
      return {
        ...state,
        snackBar2,
      };
    case commonTypes.SET_SNACKBAR_RESULT:
      return {
        ...state,
        snackBarResult: action.payload,
      };
    case commonTypes.HIDE_SNACKBAR:
      return {
        ...state,
        snackBar: initialState.snackBar,
      };
    case commonTypes.SET_LEGAL_TEXT:
      return {
        ...state,
        legalText: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};
