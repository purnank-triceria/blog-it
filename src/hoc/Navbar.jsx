import { AppBar, Toolbar } from '@material-ui/core'
import Logo from '../components/images/Logo'

const withNavbar = PageComponent => () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      <PageComponent />
    </div>
  )
}

export default withNavbar