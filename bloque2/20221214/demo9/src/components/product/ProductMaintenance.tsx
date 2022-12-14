import { Link, Outlet, useNavigate } from "react-router-dom";
import "./ProductMaintenance.css";

function ProductMaintenance() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Product Maintenance</h1>
      <Outlet />
    </>
  );
}

export default ProductMaintenance;