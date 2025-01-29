import logo from "../img/logo.png";
import { Outlet, Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

 
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
        <Navbar.Brand href="">
          <img src={logo} className="mr-3 h-6 sm:h-14" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button  className="bg-orange-500" onClick={() => navigate('/login')} >Login</Button>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  )
};

export default Nav;