import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getOrders } from "../services"
import { Container, Button } from "@material-ui/core"
import Order from "../components/Order"
import Spinner from "../components/Spinner"
import Navigator from "../components/Navigator"
import { SELLER } from "../constants/roles"
import { COLABORATOR_SCREEN } from "../constants/routes"
import * as SELLER_STATE from "../constants/seller_state"
import ButtonFixed from '../components/ButtonFixed';


const Seller = ({ rol, history }) => {
  const [ready, setReady] = useState(false)
  const [orders, setOrders] = useState([])
  const [nav, setNav] = useState(SELLER_STATE.PARA_PREPARAR);
  useEffect(() => {

    if (rol !== SELLER) history.push(COLABORATOR_SCREEN)

    getOrders("pepe", succesOrders, errorOrders)
    return () => {

    }
  }, [])
  const handleNavChange = (e, next) => {
    console.log(e, next)
    setNav(next)
  }
  const handleOrder = (e) => {
    console.log(e)

  }
  const succesOrders = (data) => {

    console.log(data)
    setOrders(data.orders)
    setReady(true)
  }
  const errorOrders = err => {
    console.log(err)
  }


  return (
    <>
      {ready && <>
        <Navigator handleChange={handleNavChange} value={nav}>


        </Navigator>
        <div className=" orders">
          {orders.map(order => {
            return <Order key={order._id} data={order} onClick={handleOrder}></Order>
          })}
          <ButtonFixed className="accionar" text={"Enviar a preparación"} onClick={() => { console.log("boton") }} > </ButtonFixed>
        </div>
      </>}
      {!ready && <Spinner></Spinner>}
    </>
  )
}
const mapStateToProps = (state) => {
  console.log(state)

  const { rol, email, user_name } = state.user.user;
  const { token } = state.user
  return { rol, email, token, user_name }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Seller)
