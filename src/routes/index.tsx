import { useKeycloak } from "@react-keycloak/web";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome";
import { PrivateRoute } from "./utils";

export const AppRouter = () => {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <div> </div>;
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Welcome} />
          <PrivateRoute
            exact
            path={"/private"}
            component={() => <div>Private</div>}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};
