import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import GuestRoutes from "./components/Routes/GuestRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "assets/css/style.css";
import MemberRoute from "components/Routes/MemberRoute";
import MyClass from "pages/MyClass";
import Unauthenticated from "pages/401";
import Register from "pages/Register";

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
