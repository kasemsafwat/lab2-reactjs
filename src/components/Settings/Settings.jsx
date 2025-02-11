import { NavLink, Outlet } from "react-router-dom";


export default function Settings() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                <ul>
                    <li>
                        <NavLink to={"/settings"} >Web</NavLink>
                    </li>
                    <li>
                        <NavLink to={"mobile"} >mobile</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-6">
                <Outlet></Outlet>
            </div>
        </div>
      
    </div>
  )
}
