import logo from "../img/logo.png";
import { Outlet, Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";


const Nav = () => {
  return (
    <>
      <Navbar fluid rounded className="fixed top-0 z-50 w-full">
        <Navbar.Brand href="">
          <img src={logo} className="mr-3 h-6 sm:h-14" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-orange-500">Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
};

export default Nav;