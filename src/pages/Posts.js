import React from 'react'
import { useLocation } from 'react-router-dom';
import withNavbar from './../hoc/Navbar';
const Posts = () => {
  const location = useLocation()
  const role = location.state?.role || 'user'
  return role
}
export default withNavbar(Posts)