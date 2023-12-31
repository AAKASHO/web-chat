// import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import "./style.scss"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';
function App() {
  const {currentUser} =useContext(AuthContext);
  // console.log(currentUser);
const ProtectedRoute=({children})=>{
   if((!currentUser)){
       return <Navigate to="/login"/>
   }
   return children
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          
          <Route index element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            }/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    // <Register/>
    // <Login/>
    // <Home/>
  );
}

export default App;
