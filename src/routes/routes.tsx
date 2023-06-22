import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainPage from '../pages/LogoutMenu/MainPage'
import OtpPage from '../pages/LogoutMenu/OtpPage'
import Register from '../pages/LogoutMenu/Register'
import Login from '../pages/LogoutMenu/Login'
import MainLoginPage from '../pages/LoginMenu/MainLoginPage'


export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <MainPage/>
          },
          {
            path: "otpregister",
            element: <OtpPage />
          },
          {
            path: "register",
            element: <Register />
          },
          {
            path: "login",
            element: <Login />
          },
          {
            path: "welcome",
            element: <MainLoginPage />
          },
          { path: "*", element: <Navigate to="/404" replace /> },
    ])
}

