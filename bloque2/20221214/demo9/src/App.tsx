import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductMaintenance from "./components/product/ProductMaintenance";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

function App() {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    setIsNavigating(true);
    return () => {
      setIsNavigating(false);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: "1em" }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
