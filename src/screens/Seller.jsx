import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getOrders } from "../services"
import Order from "../components/Order"
import Spinner from "../components/Spinner"
import Navigator from "../components/Navigator"
import { SELLER } from "../constants/roles"
import { successResponsive } from "../constants/modalObjects"

import { COLABORATOR_SCREEN } from "../constants/routes"
import * as SELLER_STATE from "../constants/seller_state"
import { bindActionCreators } from "redux";
import { setSelectedOrders, setOrders } from "./../redux/orders/actions"
import { showError } from "./../redux/common/actions"

import ButtonFixed from '../components/ButtonFixed';


const Seller = ({ rol, history, selectedOrders, dispatchSetSelectedOrders, dispatchSetOrders, repartos, dispatchShowModal }) => {
  const [ready, setReady] = useState(false)
  const [action, setAction] = useState(false)
  const [showOrders, setShowOrders] = useState([])
  const [orders, setOrders] = useState([])
  const [nav, setNav] = useState(SELLER_STATE.PARA_PREPARAR);
  useEffect(() => {

    if (rol !== SELLER) history.push(COLABORATOR_SCREEN)

    getOrders("pepe", succesOrders, errorOrders)
    return () => {

    }
  }, [])
  useEffect(() => {
    getOrders("pepe", succesOrders, errorOrders)
    return () => {

    }
  }, [nav])

  const handleNavChange = async (e, next) => {
    await setNav(next)

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
    setAction(aux.length > 0)
    dispatchSetSelectedOrders(aux)
  }
  const handleAction = async () => {
    //la accion del correspondiente segun el entorno
    setReady(false)
    let aux = selectedOrders;
    await dispatchSetSelectedOrders([])
    succesUpdate();
    console.log("pepe")
    setAction(false)

  }
  const succesUpdate = () => {
    // setReady(true)
    dispatchShowModal(successResponsive("Salio bien"))
    // console.log(window.location.reload())
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
        {repartos === undefined && <Navigator handleChange={handleNavChange} value={nav}>
        </Navigator>}
        <div className=" orders">
          {showOrders.map(order => {
            return <Order key={order._id} data={order} onClick={handleOrder} handleCheckChange={handleSelection}
            ></Order>
          })}
          <div style={{ height: "100px" }}></div>
          {action && < ButtonFixed className="accionar" text={"Enviar a preparación"} onClick={handleAction} > </ButtonFixed>}
        </div>
      </>}
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
