import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import isTokenValid from '../../utils/auth';

export const login = createAsyncThunk(
 'auth/login',
 async (credentials, { rejectWithValue }) => {
   try {
     const response = await fetch('http://localhost:8081/api/auth/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(credentials),
     });
     
     if (!response.ok) throw new Error('Invalid credentials');
     
     const data = await response.json();
     localStorage.setItem('token', data.token);
     localStorage.setItem('role', data.role);
     localStorage.setItem('userId', data.id);
     
     return data;
   } catch (error) {
     return rejectWithValue(error.message);
   }
 }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const transformedData = {
        email: userData.email,
        password: userData.password,
        nom: userData.lastName,      
        prenom: userData.firstName,  
        role: userData.role  
      };

      const response = await fetch('http://localhost:8081/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedData),
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      const text = await response.text(); // Change from json() to text()
      return { message: text }; // Return as object
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
 name: 'auth',
 initialState: {
   token: localStorage.getItem('token'),
   user: {
     role: localStorage.getItem('role'),
     id: localStorage.getItem('userId')
   },
   isAuthenticated: !!localStorage.getItem('token') && 
                   isTokenValid(localStorage.getItem('token')),
   loading: false,
   error: null,
 },
 reducers: {
   logout: (state) => {
     localStorage.removeItem('token');
     localStorage.removeItem('role');
     localStorage.removeItem('userId');
     state.token = null;
     state.user = null;
     state.isAuthenticated = false;
   },
   clearError: (state) => {
     state.error = null;
   },
 },
 extraReducers: (builder) => {
   builder
     .addCase(login.pending, (state) => {
       state.loading = true;
       state.error = null;
     })
     .addCase(login.fulfilled, (state, action) => {
       state.loading = false;
       state.token = action.payload.token;
       state.user = {
         role: action.payload.role,
         id: action.payload.id
       };
       state.isAuthenticated = true;
     })
     .addCase(login.rejected, (state, action) => {
       state.loading = false;
       state.error = action.payload;
     })
     .addCase(register.pending, (state) => {
       state.loading = true;
       state.error = null;
     })
     .addCase(register.fulfilled, (state) => {
       state.loading = false;
     })
     .addCase(register.rejected, (state, action) => {
       state.loading = false;
       state.error = action.payload;
     });
 },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;