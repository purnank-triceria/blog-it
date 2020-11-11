import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { POSTS } from '../data/posts'
import withNavbar from '../hoc/Navbar'

const useStyles = makeStyles(() => ({
  imageBox: {
    height: '500px'
    , width: '100%'
    , overflow: 'hidden'
  }
  , image: {
    width: '100%'
  }
}))

const PostImage = ({ image, style, editable }) => {
  const classes = useStyles()
  const 
  return (
    <div className={classes.imageBox} style={style}>
      <img src={image} className={classes.image} />
    </div>
  )
}


const Post = () => {
  const params = useParams()
  const postId = params.postId
  const post = POSTS.find((post) => post.id === Number(postId))
  const location = useLocation()
  const editable = location.state.role && location.state.role === 'admin'
  const { title, content, image } = post
  return (
    <Grid container>
      <Grid item md={2} />
      <Grid item md={8}>
        <PostImage image={image} style={{ paddingTop: '30px', }} editable={editable} />
        <h2>{title}</h2>
        <div>{content}</div>
      </Grid>
      <Grid item md={2} />
    </Grid>
  )
}

export default withNavbar(Post)