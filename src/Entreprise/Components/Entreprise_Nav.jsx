import logo from "/src/img/logo.png";
import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Entreprise_Nav = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleLogout = () => {
   dispatch(logout());
   navigate('/login');
 };
 
 return (
   <> 
     <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
       <Navbar.Brand as={Link} to="Eindex">
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
         <Navbar.Link as={Link} to="/Eindex" className="text-orange-700 font-semibold">
           Accueil 
         </Navbar.Link>
         <Navbar.Link as={Link} to="/EservicesListe" className="text-orange-700 font-semibold">
           Mes offres
         </Navbar.Link>
         <Navbar.Link as={Link} to="/Ehistorique" className="text-orange-700 font-semibold">
         Mes orders 
         </Navbar.Link>
         <Navbar.Link as={Link} to="/EmailE" className="text-orange-700 font-semibold">
           Contact
         </Navbar.Link>
         <Navbar.Link as={Link} to="/EProfile" className="text-orange-700 font-semibold">
           Profile
         </Navbar.Link>

       </Navbar.Collapse>
     </Navbar>
   </>
 );
};

export default Entreprise_Nav;