import logo from "/src/img/logo.png";
import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from "../../features/auth/authSlice";

const Admin_Nav = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleLogout = () => {
   dispatch(logout());
   navigate('/login');
 };

 return (
   <> 
     <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
       <Navbar.Brand as={Link} to="/Aindex">
         <img src={logo} className="h-6 sm:h-14" alt="Flowbite React Logo" />
       </Navbar.Brand>
       <div className="flex md:order-2">
         <DarkThemeToggle className="mr-3" />
         <Button 
           onClick={handleLogout}
           className="bg-orange-500 hover:bg-orange-700 dark:bg-orange-600"
         >
           Logout
         </Button>
         <Navbar.Toggle />
       </div>
       <Navbar.Collapse>
         <Navbar.Link as={Link} to="/Aindex" className="text-orange-700 font-semibold">
           Accueil
         </Navbar.Link>
         <Navbar.Link as={Link} to="/gestionclient" className="text-orange-700 font-semibold">
           Client
         </Navbar.Link>
         <Navbar.Link as={Link} to="/gestionprovider" className="text-orange-700 font-semibold">
           Prestataire
         </Navbar.Link>
         <Navbar.Link as={Link} to="/gestionentreprise" className="text-orange-700 font-semibold">
           Entreprise
         </Navbar.Link>
         <Navbar.Link as={Link} to="/AProfile" className="text-orange-700 font-semibold">
           Profile
         </Navbar.Link>
       </Navbar.Collapse>
     </Navbar>
   </>
 );
};

export default Admin_Nav;