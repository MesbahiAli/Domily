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

export default function App() {
  return (
    
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
        <Route path="servicedetails" element={<ServiceDetails />} />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>

  );
} 