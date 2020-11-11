import { Card, CardContent, CardHeader, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  root: {
    height: '400px'
  }
  , image: {
    height: '150px'
  }
})

const PostCard = ({ title, content, image }) => {
  const classes = useStyles()
  const limitedContent = content.length > 100 ? `${content.slice(0, 100)}...` : content
  return (<Card className={classes.root}>
    <CardHeader title={title} />
    <CardMedia image={image} title={title} className={classes.image} />
    <CardContent>{limitedContent}</CardContent>
  </Card>)
}
export default PostCard