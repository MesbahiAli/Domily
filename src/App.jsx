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
import Pservice from "./Provider/Pservice";
import Eservice from "./Entreprise/Eservice";
import Terms from "./Authentification/Terms";
import Profile from "./Client/Profile";
import PProfile from "./Provider/PProfile";
import Eindex from "./Entreprise/Eindex";
import EmailE from "./Entreprise/EmailE";

import OrderHistory from "./Client/Orderhistory";


import ServiceList from "./Provider/ServiceList";
import EservicesListe from "./Entreprise/EServicesListe";


import EditService from "./Provider/EditService";
import EeditService from "./Entreprise/EEditServices";
import EditPProfile from "./Provider/EditPProfile";
import EditProfile from "./Client/EditProfile";
import Historique from "./Client/Historique";
import Phistorique from "./Provider/Phistorique";
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

import Category from "./Client/Components/Category";
import Ecategory from "./Entreprise/Components/Category";



import EProfile from "./Entreprise/EProfile";
import EditEProfile from "./Entreprise/EditEProfile";
import ServicesListe from "./Entreprise/EServicesListe";
import CreateService from "./Entreprise/CreateService";
import EditServices from "./Entreprise/EEditServices";


import Aindex from "./Admin/Aindex";
import AProfile from "./Admin/AProfile";
import EditAprofile from "./Admin/EditAprofile";
import Gestion_Client from "./Admin/Gestion_Client";
import Gestion_Provider from "./Admin/Gestion_Provider";
import Gestion_Entreprise from "./Admin/Gestion_Entreprise";

import PrivateRoute from './features/auth/PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="terms" element={<Terms />} />
          <Route path="navbar" element={<Nav />} />

          {/* Protected Client Routes */}
          <Route path="cindex" element={<PrivateRoute><Cindex /></PrivateRoute>} />
          <Route path="emailus" element={<PrivateRoute><EmailUs /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="editprofile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
          <Route path="historique" element={<PrivateRoute><Historique /></PrivateRoute>} />
          <Route path="orderhistory" element={<PrivateRoute><OrderHistory /></PrivateRoute>} />
          <Route path="cservice" element={<PrivateRoute><Cservice /></PrivateRoute>} />

          {/* Protected Provider Routes */}
          <Route path="pindex" element={<PrivateRoute><Pindex /></PrivateRoute>} />
          <Route path="emailp" element={<PrivateRoute><EmailP /></PrivateRoute>} />
          <Route path="pservice" element={<PrivateRoute><Pservice /></PrivateRoute>} />
          <Route path="pprofile" element={<PrivateRoute><PProfile /></PrivateRoute>} />
          <Route path="serviceList" element={<PrivateRoute><ServiceList /></PrivateRoute>} />
          <Route path="editservice" element={<PrivateRoute><EditService /></PrivateRoute>} />
          <Route path="editpprofile" element={<PrivateRoute><EditPProfile /></PrivateRoute>} />
          <Route path="phistorique" element={<PrivateRoute><Phistorique /></PrivateRoute>} />

          {/* Protected Enterprise Routes */}
          <Route path="eindex" element={<PrivateRoute><Eindex /></PrivateRoute>} />
          <Route path="emaile" element={<PrivateRoute><EmailE /></PrivateRoute>} />
          <Route path="eservice" element={<PrivateRoute><Eservice /></PrivateRoute>} />
          <Route path="eservicesListe" element={<PrivateRoute><EservicesListe /></PrivateRoute>} />
          <Route path="eeditservice" element={<PrivateRoute><EeditService /></PrivateRoute>} />
          <Route path="eprofile" element={<PrivateRoute><EProfile /></PrivateRoute>} />
          <Route path="editeprofile" element={<PrivateRoute><EditEProfile /></PrivateRoute>} />
          <Route path="createservice" element={<PrivateRoute><CreateService /></PrivateRoute>} />

          {/* Protected Admin Routes */}
          <Route path="aindex" element={<PrivateRoute><Aindex /></PrivateRoute>} />
          <Route path="aprofile" element={<PrivateRoute><AProfile /></PrivateRoute>} />
          <Route path="editaprofile" element={<PrivateRoute><EditAprofile /></PrivateRoute>} />
          <Route path="gestionclient" element={<PrivateRoute><Gestion_Client /></PrivateRoute>} />
          <Route path="gestionprovider" element={<PrivateRoute><Gestion_Provider /></PrivateRoute>} />
          <Route path="gestionentreprise" element={<PrivateRoute><Gestion_Entreprise /></PrivateRoute>} />

          {/* Dynamic Routes */}
          <Route path="/Cservice/:category" element={<PrivateRoute><Cservice /></PrivateRoute>} />
          <Route path="/Pservice/:category" element={<PrivateRoute><Pservice /></PrivateRoute>} />
          <Route path="/Eservice/:category" element={<PrivateRoute><Eservice /></PrivateRoute>} />
          <Route path="/editservice/:id" element={<PrivateRoute><EditService /></PrivateRoute>} />
          <Route path="/eeditservice/:id" element={<PrivateRoute><EeditService /></PrivateRoute>} />
          <Route path="servicedetails/:providerId/:serviceId" element={<PrivateRoute><ServiceDetails /></PrivateRoute>} />

          {/* HomeCard Routes */}
          <Route path="homecard" element={<PrivateRoute><HomeCard /></PrivateRoute>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}