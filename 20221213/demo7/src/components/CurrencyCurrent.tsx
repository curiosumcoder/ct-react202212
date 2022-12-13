import React, { useContext, useEffect } from "react";
import { MonedaContext } from "../App";

function CurrencyCurrent() {
    const moneda = useContext(MonedaContext);
    
    useEffect(() => {
      console.log("CurrencyCurrent: ", moneda, new Date());
    });

    return (
      <>
            <span><strong>{moneda.signo}</strong> {moneda.nombre} </span>
      </>
    );
  }

export default CurrencyCurrent