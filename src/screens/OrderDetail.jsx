import React, { useState, useEffect } from "react";
import { getOrderDetail } from "./../services";
import DetailHeader from "./../components/DetailHeader";
import { Container } from "@material-ui/core";
import Spinner from "../components/Spinner";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { dateToShow } from "./../helpers/utils";

const OrderDetail = (props) => {
  const [ready, setReady] = useState(false);
  const [detail, setDetail] = useState({});
  const id = window.location.search.split("=")[1];
  useEffect(() => {
    getOrderDetail(id, succesDetail, errorDetail);
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(handlecords);
  }, []);
  const handlecords = (poss) => {
    const { latitude, longitude } = poss.coords;
    console.log({ latitude, longitude });
  };
  const succesDetail = (data) => {
    setDetail(data);
    setReady(true);
    console.log(data);
  };
  const errorDetail = (err) => {
    console.log(err);
  };
  return ready ? (
    <>
      <DetailHeader
        history={props.history}
        id={id}
        status={detail.order_status}
      ></DetailHeader>
      <Container className="detailOrder">
        <h3>ENTREGA</h3>
        <div>
          <RoomRoundedIcon></RoomRoundedIcon>
          {detail.address.formatted_address}
        </div>
        <div>
          <QueryBuilderIcon></QueryBuilderIcon>
          {dateToShow(detail.date_created)}
        </div>
        <h4>Entre las 9 y las 21 hs</h4>
      </Container>
      <Container className="detailOrder">
        <h3>PRODUCTOS</h3>
        {detail.products.map((elm, i) => {
          return (
            <div key={i}>
              <div>
                <img
                  src={"data:image/jpeg;base64," + elm.img}
                  alt=""
                  width="71"
                  height="71"
                />
              </div>
              <div className="product">
                <h5>{elm.description}</h5>
                <h6>Beats</h6>
                <span>{elm.price}</span>
              </div>
            </div>
          );
        })}
      </Container>
      {detail.order_status === 6 && (
        <Container className="detailOrder">
          <h3>FIRMA DIGITAL</h3>
          <div className="imgContainer">
            <img src={detail.signature.img} alt="" />
          </div>
          <div>
            <QueryBuilderIcon></QueryBuilderIcon>
            {dateToShow(detail.signature.datetime)}
          </div>
        </Container>
      )}
      <Container
        className="detailOrder"
        style={{ backgroundColor: "#EFF0EF" }}
      ></Container>
    </>
  ) : (
    <Spinner></Spinner>
  );
};
export default OrderDetail;
