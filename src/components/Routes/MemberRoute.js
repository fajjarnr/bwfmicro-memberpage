import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";

const MemberRoute = ({ component: Component, location, path, ...rest }) => {
  const ok = localStorage.getItem("BWFMICRO:token");

  localStorage.removeItem("BWFMICRO:redirect");

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? (
          <Component {...props} />
        ) : path === "/joined/:class" ? (
          <Redirect to={`/login?path=${location.pathname}`} />
        ) : (
          <Redirect to={`/private?path=${location.pathname}`} />
        )
      }
    />
  );
};

export default withRouter(MemberRoute);
