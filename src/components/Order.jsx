import React from 'react'
import { Card, Checkbox } from "@material-ui/core"
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { dateToShow } from "./../helpers/utils"
import { connect } from "react-redux";


const Order = ({ data, handleCheckChange, selected }) => {

  return (
    <Card className="order">
      <div>
        <h3>{data._id}</h3>
        <div><RoomRoundedIcon></RoomRoundedIcon> {data.address_info.address}</div>
        <div>
          <QueryBuilderIcon></QueryBuilderIcon> {dateToShow(data.date)}
        </div>
      </div>
      <div className="check">
        <Checkbox color="primary" onChange={(e) => { handleCheckChange(e, data._id) }}></Checkbox>
      </div>
    </Card>
  )
}
const mapStateToProps = (state) => {
  // const { selectedOrders } = state.orders
  // return { selectedOrders }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
