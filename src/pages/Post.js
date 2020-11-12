import { Grid, makeStyles } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { POSTS } from '../data/posts'
import withNavbar from '../hoc/Navbar'

const useStyles = makeStyles(() => ({
  imageBox: {
    height: '500px'
    , width: '100%'
    , overflow: 'hidden'
    , position: 'relative'
    , display: 'flex'
    , justifyContent: 'center'
    , alignItems: 'center'
  }
  , image: {
    width: '100%'
    , marginTop: 'auto'
    , marginBottom: 'auto'

  }
  , editableImageBox: {
    '&:hover div': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
      , display: 'flex'
      , justifyContent: 'center'
      , alignItems: 'center'
    }
  }
  , imageOverlay: {
    backgroundColor: 'transparent'
    , display: 'none'
    , position: 'absolute'
    , top: '0'
    , height: '500px'
    , width: '100%'
    , cursor: 'pointer'
    , boxSizing: 'border-box'
    , border: '3px solid cyan'
  }
  , editIcon: {
    backgroundColor: 'grey'
    , borderRadius: '50px'
    , padding: '10px'
  }
  , titleInput: {
    height: '32px'
    , marginTop: '20px'
    , marginBottom: '20px'
    , width: '100%'
    , resize: 'none'
  }
}))

const PostImage = ({ image, style, editable }) => {
  const classes = useStyles()
  const inputRef = useRef()
  const [file, setFile] = useState(null)
  const handleClick = () => {
    inputRef.current.click()
  }
  const handleFileSelect = ({ target }) => {
    const file = target.files[0]
    setFile(file)
  }
  const defaultImage = (
    <div className={classes.imageBox} style={style}>
      <img src={image} className={classes.image} />
    </div>
  )
  const editableImage = (
    <div className={`${classes.imageBox} ${classes.editableImageBox} `} onClick={handleClick} style={style}>
      <img src={(file && URL.createObjectURL(file)) || image} className={classes.image} />
      <div className={classes.imageOverlay}>
        <Edit color='secondary' className={classes.editIcon} />
        <input type='file' ref={inputRef} style={{ display: 'none' }} onChange={handleFileSelect} accept=".jpg" />
      </div>
    </div>
  )
  return <>{editable ? editableImage : defaultImage}</>
}

const PostTitle = ({ title, editable }) => {
  const classes = useStyles()
  const [postTitle, setTitle] = useState(null)
  const [editing, setEditing] = useState(false)
  const handleEditing = () => {
    setEditing(!editing)
  }
  const disableEditing = () => {
    setEditing(false)
  }
  const handleEdit = (e) => {
    const {target} = e
    setTitle(target.value)
  }
  const defaultRender = (<h2 onClick={handleEditing}>{postTitle || title}</h2>)
  const editableRender = (<textarea type="text" value={postTitle || title} onChange={handleEdit} className={classes.titleInput} onBlur={disableEditing} />)
  return (<>{editable && editing ? editableRender : defaultRender}</>)
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
        <PostImage image={image} style={{ marginTop: '30px', }} editable={editable} />
        <PostTitle title={title} editable={editable} />
        <div>{content}</div>
      </Grid>
      <Grid item md={2} />
    </Grid>
  )
}

export default withNavbar(Post)