import React from "react";
import withProductSearch from "../hoc/withProductSearch";
import SimpleList from "./SimpleList";
import TableList from "./TableList";

function HighOrderTest() {
  const SimpleListWrapped = withProductSearch(SimpleList,'queso');
  const TableListWrapped = withProductSearch(TableList,'ar');
  return (
    <>
      <hr />
      <h5>High-Order Components Test</h5>
      {/* <SimpleListWrapped/> */}
      <TableListWrapped/>
    </>
  );
}

export default HighOrderTest;
