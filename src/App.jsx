import React, { Fragment } from "react";
import Login from "./screens/Login";
import "./styless/index.scss";
import Registro from "./screens/Registro";
import OrderDetail from "./screens/OrderDetail";

import SellerScreen from "./screens/Seller";
import Footer from "./components/Footer";
import * as Routes from "./constants/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SideBar from "./components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styless/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path={Routes.COLABORATOR_SCREEN}
            render={(props) => (
              <Fragment>
                <SideBar {...props}>
                  <Registro {...props} />
                </SideBar>
                <Footer {...props}> </Footer>
              </Fragment>
            )}
          ></Route>
          <Route
            path={Routes.SELLER_REPARTOS_SCREEN}
            render={(props) => (
              <Fragment>
                <SideBar {...props} title={"Repartos"}>
                  <SellerScreen {...props} repartos />
                </SideBar>
                <Footer {...props}> </Footer>
              </Fragment>
            )}
          ></Route>
          <Route
            path={Routes.ORDER_DETAIL}
            render={(props) => (
              <>
                <OrderDetail {...props} repartos />
                <Footer {...props}> </Footer>
              </>
            )}
          ></Route>
          <Route
            path={Routes.SELLER_SCREEN}
            render={(props) => (
              <Fragment>
                <SideBar {...props} title={"Órdenes"}>
                  <SellerScreen {...props} />
                </SideBar>
                <Footer {...props}> </Footer>
              </Fragment>
            )}
          ></Route>
          <Route
            path={Routes.LOGIN}
            render={(props) => (
              <Fragment>
                <Login {...props} />
              </Fragment>
            )}
          ></Route>
          <Redirect to={Routes.LOGIN}> </Redirect>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
