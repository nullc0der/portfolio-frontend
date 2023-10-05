import { Outlet, useNavigation } from "react-router-dom";
import classnames from "classnames";

import Navbar from "@/components/Navbar";
import "./App.css";

function App() {
  const navigation = useNavigation();

  return (
    <div className="app-main">
      <Navbar />
      <div
        className={classnames("container", "mx-auto", "main-content", {
          loading: navigation.state === "loading",
        })}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
