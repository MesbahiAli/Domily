import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const path = location.pathname;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const roleRoutes = {
    CLIENT: ['/cindex', '/emailus', '/profile', '/editprofile', '/historique', '/orderhistory', 
            '/cservice', '/homecard', '/servicedetails'],
    PROVIDER: ['/pindex', '/emailp', '/pprofile', '/pservice', '/servicelist', '/editservice', 
               '/editpprofile', '/phistorique'],
    ENTERPRISE: ['/eindex', '/emaile', '/eprofile', '/eservice', '/eservicesliste', '/eeditservice', 
                '/editeprofile', '/createservice'],
    ADMIN: ['/aindex', '/aprofile', '/editaprofile', '/gestionclient', '/gestionprovider', 
            '/gestionentreprise']
  };

  const userRole = localStorage.getItem('role');
  const allowedRoutes = roleRoutes[userRole] || [];

  const isAllowedRoute = allowedRoutes.some(route => 
    path.toLowerCase().startsWith(route.toLowerCase())
  );

  if (!isAllowedRoute) {
    return <Navigate to="/NoPage" replace />;
  }

  return children;
};
 export default PrivateRoute