import { Grid } from '@material-ui/core';
import React from 'react'
import UserRoleCard from '../components/UserRoleCard';
import withNavbar from './../hoc/Navbar';

const Home = () => {
  return (
    <Grid container justify="space-evenly">
      <Grid item xs={12} sm={5} lg={4}>
        <UserRoleCard text="Admin" onClick={() => { }} />
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <UserRoleCard text="User" onClick={() => { }} />
      </Grid>
    </Grid>
  )
}

export default withNavbar(Home)