import * as commonTypes from "./actionTypes";

export const showError = codeError => {
    return {
        type: commonTypes.SHOW_ERR_MSG,
        payload: codeError
    }
};
export const setRouter = ({isAllowed, redirectTo}) => {
    return {
        type: commonTypes.SET_ROUTER,
        payload: {isAllowed, redirectTo}
    }
};

export const showLoading = (isLoading) => {
    return {
        type: commonTypes.SHOW_ON_LOADING,
    }
};
export const hideLoading = (isLoading) => {
    return {
        type: commonTypes.HIDE_ON_LOADING,
    }
};
export const hideModal = () => {
    return {
        type: commonTypes.HIDE_MODAL,
    }
};
export const setModalResult = (result) => {
    return {
        type: commonTypes.SET_MODAL_RESULT,
        payload: result
    }
};
export const setModalDataAndShow = ({
    title,
    paragraph,
    subtitle,
    imgSrc,
    firstButtonClass,
    firstButtonText,
    respOnClickFirst,
    showSecondButton,
    secondButtonClass,
    secondButtonText,
    respOnClickSecond,}) => {
    return {
        type: commonTypes.SET_MODAL_DATA_AND_SHOW,
        payload: {
            title,
            paragraph,
            subtitle,
            imgSrc,
            firstButtonClass,
            firstButtonText,
            respOnClickFirst,
            showSecondButton,
            secondButtonClass,
            secondButtonText,
            respOnClickSecond,
        }
    }
};
export const hideSnackBar = () => {
    return {
        type: commonTypes.HIDE_SNACKBAR,
    }
};
export const setSnackBarResult = (result) => {
    return {
        type: commonTypes.SET_SNACKBAR_RESULT,
        payload: result
    }
};
export const setSnackBarDataAndShow = ({
    //type,
    //imgSrc,
    title}) => {
    return {
        type: commonTypes.SET_SNACKBAR_DATA_AND_SHOW,
        payload: {
            title,
            //imgSrc,
            //type,
        }
    }
};
export const setLegalText = (text) => {
    return {
        type: commonTypes.SET_LEGAL_TEXT,
        payload: text
    }
}