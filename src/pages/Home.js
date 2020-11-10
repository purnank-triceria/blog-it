import React from 'react'
import withNavbar from './../hoc/Navbar';

const Home = () => {
  return (
    <div>
      Hello World
    </div>
  )
}

export default withNavbar(Home)