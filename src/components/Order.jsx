import React from "react";
import { Card, Checkbox } from "@material-ui/core";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { dateToShow } from "./../helpers/utils";
import { SELLER_REPARTOS_SCREEN } from "./../constants/routes";
import ShowStatus from "./ShowStatus";

const Order = ({ data, handleCheckChange }) => {
  const repartos = window.location.pathname === SELLER_REPARTOS_SCREEN;
  console.log(repartos);

  return (
    <Card className="order">
      <div>
        <h3>{data._id}</h3>
        <div>
          <RoomRoundedIcon></RoomRoundedIcon> {data.address.formatted_address}
        </div>
        <div>
          <QueryBuilderIcon></QueryBuilderIcon> {dateToShow(data.date_created)}
        </div>
      </div>
      <div className="check">
        {repartos ? (
          <ShowStatus data={parseInt(data.order_status)}></ShowStatus>
        ) : (
          <Checkbox
            color="primary"
            onChange={(e) => {
              handleCheckChange(e, data._id);
            }}
          ></Checkbox>
        )}
      </div>
    </Card>
  );
};

export default Order;
