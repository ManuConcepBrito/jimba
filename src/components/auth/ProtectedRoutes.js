import React from 'react'
import {auth} from '../../firestore/firestore'
import {onAuthStateChanged} from 'firebase/auth'
import {Navigate, Route, useLocation} from 'react-router-dom';
import SignUp from "../SignUp";
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