import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Button 
                    style={{color: 'white'}} 
                    size='small' 
                    onClick={() => {setCurrentId(post._id)}}>
                    <EditIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>Posted by {post.creator} {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small' />
                    Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;