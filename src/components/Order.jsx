import React from 'react'
import { Card } from "@material-ui/core"
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { dateToShow } from "./../helpers/utils"

export default function Order({ data }) {
  console.log(data)
  return (
    <Card className="order">
      <h3>{data._id}</h3>
      <div><RoomRoundedIcon></RoomRoundedIcon> {data.address_info.address}</div>
      <div>
        <QueryBuilderIcon></QueryBuilderIcon> {dateToShow(data.date)}
      </div>
    </Card>
  )
}
