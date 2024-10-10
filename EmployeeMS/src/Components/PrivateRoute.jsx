import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/start" />    
}

export default PrivateRoute