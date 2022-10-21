import { Link } from 'react-router-dom';
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import './TablePortal.scss';
import { useRef } from "react";

const TablePortal = ({ children }: {children: JSX.Element}) => {
  const ref = useRef(null);
  return createPortal(
    <div className="table-portal">
      <div className="table-portal__rays-wrapper">
        <div ref={ref} className="table-portal__rays" />
        {children}
      </div>
      <Link to=".." className="table-portal__return-button">
        Return
      </Link>
      
    </div>
    ,
    document.getElementById("portal-root") as Element
  )
}

export default TablePortal;