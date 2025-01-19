import logo from "/src/img/logo.png";
import { Outlet, Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

 
const User_Nav = () => {
  return (
    <>
      <Navbar fluid className="fixed top-0 z-50 w-full">
        <Navbar.Brand href="">
          <img src={logo} className="h-6 sm:h-14" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
        <DarkThemeToggle className="mr-3" />
          <Button className="bg-orange-500 hover:bg-orange-700 dark:bg-orange-600">Logout</Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
        <Navbar.Link href="Cindex" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-orange-950 hover:bg-orange-500">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="EmailUs">Contact</Navbar.Link>
      </Navbar.Collapse>
      </Navbar>

    </>
  )
};

export default User_Nav;