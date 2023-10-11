import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "@/components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-main">
      <ScrollRestoration />
      <Navbar />
      <div className="container mx-auto main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
