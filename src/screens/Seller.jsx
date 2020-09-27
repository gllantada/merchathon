import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRadioObject, getQuery } from "./../helpers/utils";

import {
  getOrders,
  getDelivers,
  updateOrders,
  updateDelivers,
} from "../services";
import Order from "../components/Order";
import Spinner from "../components/Spinner";
import Navigator from "../components/Navigator";
import { SELLER } from "../constants/roles";
import { COLABORATOR_SCREEN } from "../constants/routes";
import * as SELLER_STATE from "../constants/seller_state";
import { bindActionCreators } from "redux";
import { setSelectedOrders, setOrders } from "./../redux/orders/actions";
import { showError } from "./../redux/common/actions";
import { getObjectToUpdate } from "./../helpers/utils";
import ButtonFixed from "../components/ButtonFixed";
import Modal from "./../components/Modal";
import Delivers from "./../components/Delivers";
import ShowMessage from "../components/ShowMessage";

const Seller = ({
  rol,
  history,
  selectedOrders,
  dispatchSetSelectedOrders,
  dispatchSetOrders,
  repartos,
}) => {
  const [ready, setReady] = useState(false);
  const [readyDelivers, setReadyDelivers] = useState(false);
  const [action, setAction] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showOrders, setShowOrders] = useState([]);
  const [nav, setNav] = useState(SELLER_STATE.PARA_PREPARAR - 1);
  const [actionText, setActionText] = useState("Enviar a preparación");
  const [messageToShow, setMessageToShow] = useState("");
  const [delivers, setDelivers] = useState([]);

  useEffect(() => {
    if (rol !== SELLER) history.push(COLABORATOR_SCREEN);
    getOrders(getQuery(nav, repartos), succesOrders, errorOrders);
    return () => {};
  }, []);

  useEffect(() => {
    if (rol !== SELLER) history.push(COLABORATOR_SCREEN);
    setReady(false);
    setShowOrders([]);
    getOrders(getQuery(nav, repartos), succesOrders, errorOrders);
    return () => {};
  }, [repartos]);

  useEffect(() => {
    setReady(false);
    getOrders(getQuery(nav, repartos), succesOrders, errorOrders);
    setActionText(SELLER_STATE.getActionText(nav));
    setAction(false);
    dispatchSetSelectedOrders([]);
    return () => {};
  }, [nav]);

  useEffect(() => {
    setTimeout(() => {
      setMessageToShow("");
    }, 4000);
  }, [messageToShow]);

  useEffect(() => {
    setReadyDelivers(true);
  }, [delivers]);

  const handleAsigment = (value) => {
    let aux = {};
    aux._id = value;
    aux.body = selectedOrders;
    updateDelivers(aux, succesUpdate, errorUpdate);
    setOpenModal(false);
  };

  const handleNavChange = (e, next) => {
    setNav(next);
  };
  const succesDelivers = (data) => {
    let aux = getRadioObject(data);
    setDelivers(aux);
  };

  const errorDelivers = (err) => {
    console.log(err);
  };
  const handleOrder = (e) => {};

  const handleSelection = (e, id) => {
    let aux = selectedOrders;
    if (!e.target.checked) {
      aux = selectedOrders.filter((elm) => {
        if (elm !== id) return elm;
        else return null;
      });
    } else {
      aux.push(id);
    }
    setAction(aux.length > 0);
    dispatchSetSelectedOrders(aux);
  };
  const handleAction = async () => {
    if (nav + 1 === SELLER_STATE.PARA_DESPACHO) {
      setReadyDelivers(false);
      getDelivers(succesDelivers, errorDelivers);
      setOpenModal(true);
      return;
    }
    updateOrders(
      getObjectToUpdate(nav, selectedOrders),
      succesUpdate,
      errorUpdate
    );
    setReady(false);

    dispatchSetSelectedOrders([]);
    setAction(false);
  };
  const errorUpdate = () => {
    console.log("error");
  };
  const succesUpdate = () => {
    setMessageToShow(SELLER_STATE.getSuccesMessage(nav));
    setAction(false);
    getOrders(getQuery(nav, repartos), succesOrders, errorOrders);
  };
  const succesOrders = (data) => {
    let aux;
    if (repartos) {
      aux = data.filter((order) => {
        if (parseInt(order.order_status) > 3) return order;
        else return null;
      });
    } else {
      aux = data.filter((order) => {
        if (parseInt(order.order_status) === nav + 1) return order;
        else return null;
      });
    }
    setShowOrders(aux);
    dispatchSetOrders(data);
    setReady(true);
  };
  const errorOrders = (err) => {};

  return (
    <>
      {ready && (
        <>
          <ShowMessage text={messageToShow}></ShowMessage>

          {repartos === undefined && (
            <Navigator handleChange={handleNavChange} value={nav}></Navigator>
          )}
          <div className=" orders">
            {showOrders.map((order) => {
              return (
                <Order
                  key={order._id}
                  data={order}
                  history={history}
                  onClick={handleOrder}
                  handleCheckChange={handleSelection}
                ></Order>
              );
            })}
            <div style={{ height: "100px" }}></div>
            {action && (
              <ButtonFixed
                className="accionar"
                text={actionText}
                onClick={handleAction}
              ></ButtonFixed>
            )}
          </div>
        </>
      )}

      {readyDelivers && (
        <Modal open={openModal} handleClose={() => setOpenModal(false)}>
          <Delivers
            handleAsigment={handleAsigment}
            handleClose={() => setOpenModal(false)}
            options={delivers}
          ></Delivers>
        </Modal>
      )}
      {!ready && <Spinner></Spinner>}
    </>
  );
};
const mapStateToProps = (state) => {
  const { rol, email, user_name } = state.user.user;
  const { token } = state.user;
  const { selectedOrders } = state.orders;

  return { rol, email, token, user_name, selectedOrders };
};

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      dispatchSetSelectedOrders: setSelectedOrders,
      dispatchSetOrders: setOrders,
      dispatchShowModal: showError,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Seller);
