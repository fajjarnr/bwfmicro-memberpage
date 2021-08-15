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

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoutes path="/login" component={Login} />
          <GuestRoutes path="/register" component={Register} />
          <GuestRoutes path="/private" component={Unauthenticated} />
          <MemberRoute exact path="/" component={MyClass} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
