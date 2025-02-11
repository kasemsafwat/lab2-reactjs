
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function LayOut() {
  return (
    <>
      <NavBar></NavBar>

      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
}
