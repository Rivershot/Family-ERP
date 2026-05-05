import React from "react"
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
import AuthLayout from "./layouts/AuthLayout"


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
      </Routes>        
    </BrowserRouter>
  )
}

export default App
