import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}

export default App;
