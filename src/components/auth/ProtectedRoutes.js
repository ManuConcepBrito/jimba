import React from 'react'
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";

function AuthRequired({ children }) {
  const location = useLocation()
  const {currentUser} = useAuth()

  if (!currentUser) {
    return <Navigate to="/sign-in" state={{from: location}} />;
  }

  return children;
}
export {AuthRequired};