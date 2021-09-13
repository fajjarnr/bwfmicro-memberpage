import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import "assets/css/style.css";

import GuestRoutes from "./components/Routes/GuestRoutes";
import MemberRoute from "components/Routes/MemberRoute";

import NotFound from "pages/404";
import Unauthenticated from "pages/401";

import Login from "./pages/Login";
import Register from "pages/Register";

import MyClass from "pages/MyClass";
import Joined from "pages/Joined";
import DetailsClass from "pages/DetailsClass";
import Settings from "pages/Setttings";
import Transactions from "pages/Transactions";

import { populateProfile } from "store/actions/users";
import { setAuthorizationHeader } from "configs/axios";

import users from "constants/api/users";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BWFMICRO:token")) {
      session = JSON.parse(localStorage.getItem("BWFMICRO:token"));
      setAuthorizationHeader(session.token);
    }

    users.details().then((details) => {
      dispatch(populateProfile(details.data));
    });
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoutes path="/login" component={Login} />
          <GuestRoutes path="/register" component={Register} />
          <GuestRoutes path="/private" component={Unauthenticated} />

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute path="/settings" component={Settings}></MemberRoute>
          <MemberRoute
            path="/transactions"
            component={Transactions}
          ></MemberRoute>

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
