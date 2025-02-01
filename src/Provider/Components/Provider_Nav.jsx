import logo from "/src/img/logo.png";
import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

 
const Provider_Nav = () => {
  return (
    <> 
      <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
        <Navbar.Brand href="/pindex">
          <img src={logo} className="h-6 sm:h-14" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
        <DarkThemeToggle className="mr-3" />
          <Button className="bg-orange-500 hover:bg-orange-700 dark:bg-orange-600">Logout</Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse >
        <Navbar.Link href="Pindex" className="text-orange-700 font-semibold ">
        Accueil
        </Navbar.Link>
        <Navbar.Link href="servicelist" className="text-orange-700 font-semibold ">Mes services</Navbar.Link>
        <Navbar.Link href="EmailP" className="text-orange-700 font-semibold ">Contact</Navbar.Link>
        <Navbar.Link href="PProfile" className="text-orange-700 font-semibold ">Profile</Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
      
      

    </>
  )
};

export default Provider_Nav;