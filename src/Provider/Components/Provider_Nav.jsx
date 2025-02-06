import logo from "/src/img/logo.png";
import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Provider_Nav = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleLogout = () => {
   dispatch(logout());
   navigate('/login');
 };

 return (
   <> 
     <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
       <Navbar.Brand as={Link} to="Pindex">
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
         <Navbar.Link as={Link} to="/Pindex" className="text-orange-700 font-semibold">
           Accueil
         </Navbar.Link>
         <Navbar.Link as={Link} to="/servicelist" className="text-orange-700 font-semibold">
           Mes services
         </Navbar.Link>
         <Navbar.Link as={Link} to="/EmailP" className="text-orange-700 font-semibold">
           Contact
         </Navbar.Link>
         <Navbar.Link as={Link} to="/PProfile" className="text-orange-700 font-semibold">
           Profile
         </Navbar.Link>
         <Navbar.Link as={Link} to="/Phistorique" className="text-orange-700 font-semibold">
           Mes Reservations
         </Navbar.Link>
       </Navbar.Collapse>
     </Navbar>
   </>
 );
};

export default Provider_Nav;