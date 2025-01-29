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
        <Route path="emailus" element={<EmailUs />} />
        <Route path="emailp" element={<EmailP />} />
        <Route path="service" element={<Service />} />
        <Route path="cservice" element={<Cservice />} />
        <Route path="terms" element={<Terms />} />
        <Route path="profile" element={<Profile />} />
        <Route path="pprofile" element={<PProfile />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>

  );
} 