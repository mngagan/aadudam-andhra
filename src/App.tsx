import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register/Register";
import { URLs } from "./Constants/System";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={URLs.HOME} element={<Home />} />
        <Route path={URLs.REGISTER} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
