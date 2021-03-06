import React from "react";
import { Card, Checkbox } from "@material-ui/core";
import { ORDER_DETAIL } from "./../constants/routes";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { dateToShow } from "./../helpers/utils";
import { SELLER_REPARTOS_SCREEN } from "./../constants/routes";
import ShowStatus from "./ShowStatus";

const Order = ({ data, handleCheckChange, history }) => {
  const handleDetail = () => {
    history.push(`${ORDER_DETAIL}?t=${data._id}`);
  };
  const repartos = window.location.pathname === SELLER_REPARTOS_SCREEN;

  return (
    <Card className="order">
      <div onClick={handleDetail}>
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
