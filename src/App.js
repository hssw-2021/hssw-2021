import "./App.css";
import { Switch, Route } from "react-router-dom";
import PublicLayout from "./layout";
import AdminLayout from "./layout/adminLayout";
import routes from "./router";
import CustomerLayout from "./layout/customerLayout";
import DoctorLayout from "./layout/doctorLayout";

function App() {
  return (
    <Switch>
      <Route path="/admin">
        <AdminLayout routes={routes.adminRoutes.routes} />
      </Route>
      <Route path="/customer">
        <CustomerLayout routes={routes.customerRoutes.routes} />
      </Route>
      <Route path="/doctor">
        <DoctorLayout routes={routes.doctorRoutes.routes} />
      </Route>
      <Route path="/">
        <PublicLayout routes={routes.publicRoutes.routes} />
      </Route>
    </Switch>
  );
}

export default App;
