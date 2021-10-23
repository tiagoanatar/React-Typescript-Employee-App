import React from "react";
// Routes
import { Home } from "./routes/Home"
import { Admin } from "./routes/Admin"
import { Employees } from "./routes/Employees"
import { EditUser } from "./components/EditUser"
import { AddReviewEmployee } from "./components/AddReviewEmployee"
// Libraries
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/employees/item/:id/employeesreview" component={AddReviewEmployee} />
        <Route path="/admin/item/:id" component={EditUser} />
        <Route exact path="/employees" component={Employees} />
      </Switch>
      </Router>
    </>
  )
}

export default App;
