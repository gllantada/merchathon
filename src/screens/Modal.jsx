import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Title from "./../components/Forms/Title";
import CustomModal from "./../components/Modal";
import { hideModal, setModalResult } from "./../redux/common/actions";
import { Button } from "@material-ui/core";

class ModalScreen extends Component {
  hideModal = () => {
    this.props.dispatchHideModal();
  };

  onClickedButton = text => {
    this.props.dispatchModalResult(text);
    this.hideModal();
  };

  render() {
    const {
      title,
      showModal,
      paragraph,
      subtitle,
      imgSrc,
      firstButtonClass,
      firstButtonText,
      respOnClickFirst,
      showSecondButton,
      secondButtonClass,
      secondButtonText,
      respOnClickSecond
    } = this.props.modal;
    return (
      <CustomModal
        title={title}
        open={showModal}
        handleClose={() => this.hideModal()}
      >
        <Grid
          container
          direction="column"
          item
          xs={12}
          justify="center"
          style={{ textAlign: "center", padding: 20 }}
        >
          {imgSrc && <img src={imgSrc} alt="modal" />}
          <Grid
            container
            direction="column"
            spacing={2}
            alignItems={"center"}
            justify="center"
            item
            xs={12}
          >
            {subtitle && (
              <Title
                style={{ textAlign: "center", fontSize: 16 }}
                text={subtitle}
              />
            )}
            {paragraph && (
              <div
                style={{
                  paddingTop: 11,
                  width: 280,
                  color: "#838aa2",
                  fontSize: 12
                }}
              >
                {paragraph}
              </div>
            )}
            <Button
              id="mdl_btn_first"
              className={firstButtonClass || ""}
              onClick={() => this.onClickedButton(respOnClickFirst)}
              style={{ marginTop: 20, width: 176, height: 32, padding: "7px 15px" }}
            >
              {firstButtonText}
            </Button>
            {showSecondButton && (
              <Button
                className={secondButtonClass}
                id="mdl_btn_second"
                onClick={() => this.onClickedButton(respOnClickSecond)}
                variant="outlined"
                style={{ marginTop: 16, width: 176, height: 32, padding: "7px 15px" }}
              >
                {secondButtonText}
              </Button>
            )}
          </Grid>
        </Grid>
      </CustomModal>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { modal } = state.common;
  return {
    modal
  };
};
const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      dispatchHideModal: hideModal,
      dispatchModalResult: setModalResult
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);


