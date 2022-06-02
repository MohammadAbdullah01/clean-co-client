import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { publicRoutes } from './Routes/publicRoutes'

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
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
