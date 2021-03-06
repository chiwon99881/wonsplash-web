import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../Screen/Login";
import Join from "../../Screen/Join";
import Feed from "../../Screen/Feed";
import Header from "../Header";
import Search from "src/Screen/Search";
import Anonymous from "src/Screen/Anonymous";
import Edit from "src/Screen/Edit";
import Followings from "src/Screen/Followings";
import Post from "src/Screen/Post";

interface IProps {
  isLoggedIn: boolean;
  pathname: string;
}
const AppPresenter: React.SFC<IProps> = ({ isLoggedIn, pathname }) => {
  return (
    <>
      {isLoggedIn ? <Header /> : null}
      {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </>
  );
};

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"} component={Feed} />
      <Route exact={true} path={"/search"} component={Search} />
      <Route exact={true} path={"/profile/:username"} component={Anonymous} />
      <Route exact={true} path={"/edit"} component={Edit} />
      <Route exact={true} path={"/following"} component={Followings} />
      <Route exact={true} path={"/post"} component={Post} />
    </Switch>
  );
};

const LoggedOutRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"} component={Login} />
      <Route exact={true} path={"/join"} component={Join} />
    </Switch>
  );
};
export default AppPresenter;
