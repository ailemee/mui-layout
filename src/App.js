import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import DrawerLeft from "./components/DrawerLeft";

function App() {
  return (
    <div>
      <Header />
      {/* <DrawerLeft /> */}
      <Outlet />
    </div>
  );
}

export default App;
