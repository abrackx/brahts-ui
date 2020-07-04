import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '55vh',
        height: '35vh',
    },
    media: {
        width: '30%',
        height: 'auto',
    },
    text: {
        justifyContent: 'flex-end',
    },
    content: {
        width: '40%',
    }
}));

export default function FeedItem({ img, title, text }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.media}
                image={img}
                title={title}
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom component="h2">
                    {title}
                </Typography>
                <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}