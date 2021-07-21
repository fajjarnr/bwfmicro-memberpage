import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import GuestRoutes from "./components/Routes/GuestRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "assets/css/style.css";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoutes path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
