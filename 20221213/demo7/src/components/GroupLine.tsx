import React, { ReactElement } from "react";

function GroupLine({children}:{children:ReactElement}) {
    return (
      <>
      <li className="list-group-item">
        {children}
      </li>
      </>
    );
  }

export default GroupLine;
