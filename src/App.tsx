import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forgotPassword" element={<ForgotPasswordPage/>}/>
        </Route>
        <Route path="/" element={<Navigate to="/login" replace/>}/>
        <Route element={<MainLayout/>}> 
          <Route path="/dashboard" element={<Navigate to="" replace/>}/>
        </Route>
      </Routes>        
    </BrowserRouter>
  )
}

export default App
