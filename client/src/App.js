import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/PrivateRoute";

// Screens

import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={PrivateRoute} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
