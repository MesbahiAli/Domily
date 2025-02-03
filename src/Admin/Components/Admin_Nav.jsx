import logo from "/src/img/logo.png";
import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

 
const Admin_Nav = () => {
  return (
    <> 
      <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
        <Navbar.Brand href="/Aindex">
          <img src={logo} className="h-6 sm:h-14" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
        <DarkThemeToggle className="mr-3" />
          <Button className="bg-orange-500 hover:bg-orange-700 dark:bg-orange-600">Logout</Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse >
        <Navbar.Link href="Aindex" className="text-orange-700 font-semibold ">
        Accueil
        </Navbar.Link>
        <Navbar.Link href="gestionclient" className="text-orange-700 font-semibold ">Client</Navbar.Link>
        <Navbar.Link href="gestionprovider" className="text-orange-700 font-semibold ">Prestataire</Navbar.Link>
        <Navbar.Link href="gestionentreprise" className="text-orange-700 font-semibold ">Entreprise</Navbar.Link>
        <Navbar.Link href="AProfile" className="text-orange-700 font-semibold ">Profile</Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
      
      

    </>
  )
};

export default Admin_Nav;