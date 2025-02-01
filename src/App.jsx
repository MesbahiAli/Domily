import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Register from "./Authentification/Register";
import Login from "./Authentification/Login";
import Nav from "./Components/Nav";
import Cindex from "./Client/Cindex";
import EmailUs from "./Client/EmailUs";
import EmailP from "./Provider/EmailP";
import Pindex from "./Provider/Pindex";
import Service from "./Provider/Service";
import Cservice from "./Client/Cservice";
import Terms from "./Authentification/Terms";
import Profile from "./Client/Profile";
import PProfile from "./Provider/PProfile";
import Eindex from "./Entreprise/Eindex";
import EmailE from "./Entreprise/EmailE";
import ServiceList from "./Provider/ServiceList";
import EditService from "./Provider/EditService";
import EditPProfile from "./Provider/EditPProfile";
import EditProfile from "./Client/EditProfile";
import Historique from "./Client/Historique";
import ServiceDetails from "./Client/ServiceDetails";
import HomeCard from "./Client/Components/HomeCard"; 
import HomeCard1 from "./Client/Components/HomeCard1"; 
import HomeCard2 from "./Client/Components/HomeCard2"; 
import HomeCard3 from "./Client/Components/HomeCard3"; 
import HomeCard4 from "./Client/Components/HomeCard4"; 
import HomeCard5 from "./Client/Components/HomeCard5"; 
import HomeCard6 from "./Client/Components/HomeCard6"; 
import HomeCard7 from "./Client/Components/HomeCard7"; 
import HomeCard8 from "./Client/Components/HomeCard8"; 
import HomeCard9 from "./Client/Components/HomeCard9"; 


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="navbar" element={<Nav />} />
          <Route path="cindex" element={<Cindex />} />
          <Route path="pindex" element={<Pindex />} />
          <Route path="eindex" element={<Eindex />} />
          <Route path="emailus" element={<EmailUs />} />
          <Route path="emailp" element={<EmailP />} />
          <Route path="emaile" element={<EmailE />} />
          <Route path="service" element={<Service />} />
          <Route path="cservice" element={<Cservice />} />
          <Route path="terms" element={<Terms />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pprofile" element={<PProfile />} />
          <Route path="serviceList" element={<ServiceList />} />
          <Route path="editservice" element={<EditService />} />
          <Route path="editpprofile" element={<EditPProfile />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="historique" element={<Historique />} />

          {/* Add HomeCard and ServiceDetails routes */}
          <Route path="homecard" element={<HomeCard />} /> {/* Route for HomeCard */}
          <Route path="homecard1" element={<HomeCard1 />} /> {/* Route for HomeCard1 */}
          <Route path="homecard2" element={<HomeCard2 />} /> {/* Route for HomeCard2 */}
          <Route path="homecard3" element={<HomeCard3 />} /> {/* Route for HomeCard3 */}
          <Route path="homecard4" element={<HomeCard4 />} /> {/* Route for HomeCard4 */}
          <Route path="homecard5" element={<HomeCard5 />} /> {/* Route for HomeCard5 */}
          <Route path="homecard6" element={<HomeCard6 />} /> {/* Route for HomeCard6 */}
          <Route path="homecard7" element={<HomeCard7 />} /> {/* Route for HomeCard7 */}
          <Route path="homecard8" element={<HomeCard8 />} /> {/* Route for HomeCard8 */}
          <Route path="homecard9" element={<HomeCard9 />} /> {/* Route for HomeCard9 */}


          <Route path="servicedetails/:id" element={<ServiceDetails />} /> {/* Dynamic route for ServiceDetails */}

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}