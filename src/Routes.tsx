import React from "react";
import { Route, Switch } from "react-router";
import Mian from "./components/Main";
import User from "./components/User";

const RoutesList = {
    MAINL: "/",
    USER: "/user"
}

const RoutesInfo = [
    {
        path: RoutesList.MAINL, component: Mian
    },
    {
        path: RoutesList.USER, component: User
    }
]

const generateReactRouteArr = (routeList) => {

    return routeList.map((item, index) => {
        if(!item.needExact) {
            item.needExact = true;
        }
        return (<Route key={index} path={item.path} component={item.component} exact={item.needExact} />)
    })
}

const Routes = () => {
    return (
        <Switch>
            ...{generateReactRouteArr(RoutesInfo)}
        </Switch>
    )
}

export default Routes;

