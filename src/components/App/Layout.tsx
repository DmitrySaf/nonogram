import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <h1>Nonogram</h1>
      <Outlet/>
    </div>
  )
}

export default Layout;
