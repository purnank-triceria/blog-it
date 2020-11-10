import { makeStyles } from '@material-ui/core'
import react from 'react'
import LogoImg from '../../images/logo.png'

const useStyles = makeStyles(() => ({
  main: {
    height: '64px'
    , overflow: 'hidden'
    , '& img': {
      height: '200px'
      , marginTop: '-68px'
      , marginLeft: '-32px'
    }
  }
}))

const Logo = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <img src={LogoImg} />
    </div>
  )
}

export default Logo