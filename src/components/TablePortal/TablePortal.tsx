import { Link } from 'react-router-dom';
import { createPortal } from "react-dom";

import './TablePortal.scss';

const TablePortal = ({ children }: {children: JSX.Element}) => {
  return createPortal(
    <div className="table-portal">
      <div className="table-portal__ray-wrapper">
        <div className="table-portal__rays" /* style={{ transition: `.5s opacity ${(code.length * 2) / 100 + 0.05}s` }} */ />
        {children}
      </div>
      <Link to=".." className="table-portal__return-button" /* style={{ transitionDelay: `0s, 0s, ${(code.length * 2) / 100 + 0.15}s` }} */>
        Return
      </Link>
    </div>,
    document.getElementById("portal-root") as Element
  )
}

export default TablePortal;