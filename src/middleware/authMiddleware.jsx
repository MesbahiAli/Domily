import { logout } from '../features/auth/authSlice';
import isTokenValid from "../utils/auth";

export const authMiddleware = store => next => action => {
    const token = localStorage.getItem('token');
    
    if (token && !isTokenValid(token)) {
        store.dispatch(logout());
        window.location.href = '/login';
    }
    
    return next(action);
};