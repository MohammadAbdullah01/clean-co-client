import { Route, Routes } from "react-router-dom";
import AdminRoute from "./authentication/AdminRoute";
import PrivateRoute from "./authentication/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import { publicRoutes } from './Routes/publicRoutes'
import { adminRoutes } from './Routes/adminRoutes'
import { privateRoutes } from './Routes/privateRoutes'
import AddService from "./pages/Dashboard/AddService";
import AddAdmin from "./pages/Dashboard/AddAdmin";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          {publicRoutes.map(({ pathName, Component }, index) => <Route
            key={index}
            path={pathName}
            element={<Component />}
          ></Route>)}
          {/* <Route path='/services' element={<PrivateRoute><Services></Services></PrivateRoute>}></Route> */}
          <Route element={<AdminRoute></AdminRoute>}>
            {adminRoutes.map(({ pathName, Component }, index) => <Route
              key={index}
              path={pathName}
              element={<Component />}
            >
              <Route index element={<AddAdmin></AddAdmin>}></Route>
              <Route path='add-service' element={<AddService></AddService>}></Route>
            </Route>)}
          </Route>
          <Route element={<PrivateRoute></PrivateRoute>}>
            {privateRoutes.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}
            ></Route>)}
          </Route>

        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
