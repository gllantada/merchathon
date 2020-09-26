import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getOrders } from "../services";
import Order from "../components/Order";
import Spinner from "../components/Spinner";
import Navigator from "../components/Navigator";
import { SELLER } from "../constants/roles";
import { successResponsive } from "../constants/modalObjects";
import { COLABORATOR_SCREEN } from "../constants/routes";
import * as SELLER_STATE from "../constants/seller_state";
import { bindActionCreators } from "redux";
import { setSelectedOrders, setOrders } from "./../redux/orders/actions";
import { showError } from "./../redux/common/actions";
import ButtonFixed from '../components/ButtonFixed';
import Modal from './../components/Modal';
import Delivers from './../components/Delivers';
import ShowMessage from '../components/ShowMessage';



const Seller = ({ rol, history, selectedOrders, dispatchSetSelectedOrders, dispatchSetOrders, repartos, dispatchShowModal }) => {
  const [ready, setReady] = useState(false)
  const [action, setAction] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [showOrders, setShowOrders] = useState([])
  const [orders, setOrders] = useState([])
  const [nav, setNav] = useState(SELLER_STATE.PARA_PREPARAR);
  const [actionText, setActionText] = useState("Enviar a preparación");
  const [messageToShow, setMessageToShow] = useState("")

  useEffect(() => {

    if (rol !== SELLER) history.push(COLABORATOR_SCREEN)

    getOrders("pepe", succesOrders, errorOrders)
    return () => {

    }
  }, [])
  useEffect(() => {
    getOrders("pepe", succesOrders, errorOrders)
    setActionText(SELLER_STATE.getActionText(nav))
    setAction(false)
    dispatchSetSelectedOrders([])
    return () => {

    }
  }, [nav])
  useEffect(() => {
    setTimeout(() => {
      setMessageToShow("")

    }, 1000);
  }, [messageToShow])

  const handleNavChange = (e, next) => {
    setNav(next)

  }
  const handleOrder = (e) => {


  }

  const handleSelection = (e, id) => {
    let aux = selectedOrders;
    console.log(e.target.checked)
    if (!e.target.checked) {
      aux = selectedOrders.filter(elm => {

        if (elm !== id) return elm
        else return null
      })
    } else {
      aux.push(id)
    }
    setAction(aux.length > 0);
    dispatchSetSelectedOrders(aux);
  }
  const handleAction = async () => {
    if (nav === SELLER_STATE.PARA_DESPACHO) {
      setOpenModal(true);
      return
    }
    let aux = selectedOrders;

    setReady(false)

    await dispatchSetSelectedOrders([])
    succesUpdate();
    console.log("pepe")
    console.log(nav)
    setAction(false)


  }
  const succesUpdate = () => {
    setReady(true)
    setMessageToShow(SELLER_STATE.getSuccesMessage(nav));
    dispatchShowModal(successResponsive("Salio bien"))
  }
  const succesOrders = (data) => {
    console.log(orders)
    let aux = data.orders.filter(order => {
      if (order.order_status === nav) return order
    })
    console.log("aux orders", nav)
    setShowOrders(aux)
    dispatchSetOrders(data.orders)
    setOrders(data.orders)
    setReady(true)
  }
  const errorOrders = err => {
  }


  return (
    <>
      {ready && <>
        <ShowMessage text={messageToShow}></ShowMessage>

        {repartos === undefined && <Navigator handleChange={handleNavChange} value={nav}>
        </Navigator>}
        <div className=" orders">
          {showOrders.map(order => {
            return <Order key={order._id} data={order} onClick={handleOrder} handleCheckChange={handleSelection}
            ></Order>
          })}
          <div style={{ height: "100px" }}></div>
          {action && < ButtonFixed className="accionar" text={actionText} onClick={handleAction} > </ButtonFixed>}
        </div>
      </>}

      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <Delivers handleClose={() => setOpenModal(false)}></Delivers>
      </Modal>
      {!ready && <Spinner></Spinner>}

    </>
  )
}
const mapStateToProps = (state) => {

  const { rol, email, user_name } = state.user.user;
  const { token } = state.user
  const { selectedOrders, orders } = state.orders


  return { rol, email, token, user_name, selectedOrders }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      dispatchSetSelectedOrders: setSelectedOrders,
      dispatchSetOrders: setOrders,
      dispatchShowModal: showError,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Seller)
