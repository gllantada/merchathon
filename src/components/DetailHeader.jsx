import React, { useState, useEffect } from "react";
import Delivers from "./../components/Delivers";
import { Container, Button, Divider } from "@material-ui/core";
import { updateDelivers, getDelivers } from "./../services";
import { getRadioObject } from "./../helpers/utils";
import ShowStatus from "./ShowStatus";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
export default function DetailHeader({ id, status, history }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [delivers, setDelivers] = useState([]);
  const [ready, setReady] = useState(false);
  const handleAsigment = (value) => {
    let aux = {};
    aux._id = value;
    aux.body = [id];
    updateDelivers(aux, succesUpdate, errorUpdate);
  };

  useEffect(() => {
    if (delivers.length > 0) setModalOpen(true);
  }, [delivers]);

  const succesDelivers = (data) => {
    let aux = getRadioObject(data);
    setDelivers(aux);
  };

  const errorDelivers = (err) => {
    console.log(err);
  };

  const succesUpdate = () => {
    window.location.reload();
  };
  const errorUpdate = (err) => {
    console.log("error", err);
  };
  return (
    <Container className="detailheader">
      <div className="head">
        <KeyboardArrowLeftRoundedIcon
          onClick={() => {
            history.goBack();
          }}
        ></KeyboardArrowLeftRoundedIcon>
        <h2>Detalle de la orden</h2>
      </div>
      <h1>{id}</h1>
      <div className="check" style={{ marginTop: "2px" }}>
        <ShowStatus data={status}></ShowStatus>
      </div>
      {status === 10 && (
        <div className="cancel">
          <span>Primera visita</span>
          <div>
            <Button
              onClick={() => {
                getDelivers(succesDelivers, errorDelivers);
              }}
            >
              Volver a enviar
            </Button>
          </div>
        </div>
      )}
      {modalOpen && (
        <Delivers
          style={{ position: "absolute", top: "66px" }}
          handleAsigment={handleAsigment}
          handleClose={() => setModalOpen(false)}
          options={delivers}
        ></Delivers>
      )}
    </Container>
  );
}
