import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";
import { history, store } from "./store";
import Footer from "./components/common/Footer";


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
            <Footer />
        </ConnectedRouter>
    </Provider>
    , document.getElementById("root"))
