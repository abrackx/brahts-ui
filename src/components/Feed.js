import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import FeedItem from './FeedItem'
import DatabaseIcon from '../imgs/db.svg'
import Kafka from '../imgs/kafka.svg'
import Spring from '../imgs/spring.svg'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: theme.spacing(4),
    },
}));

function Feed({ page }) {
    const classes = useStyles();

    const togglePage = (page) => {
        switch (page) {
            case "main": {
                return (
                    <div className={classes.content}>
                        <FeedItem
                            title="full stack developer"
                            text="capable in the front-end, at home in the back-end"
                            img={DatabaseIcon}
                        />
                        <FeedItem
                            title="full stack developer"
                            text="capable in the front-end, at home in the back-end"
                            img={Spring}
                        />
                        <FeedItem
                            title="experienced system architect"
                            text="from data modelling to kafka implementations"
                            img={Kafka}
                        />
                    </div>
                )
            }
            case "about": {
                return (
                    <div className={classes.content}>
                        <FeedItem
                            title="full stack developer"
                            text="capable in the front-end, at home in the back-end"
                            img={Spring}
                        />
                        <FeedItem
                            title="experienced system architect"
                            text="from data modelling to kafka implementations"
                            img={Kafka}
                        />
                    </div>
                )
            }
            case "github": {
                return (
                    <div className={classes.content}>
                        <FeedItem
                            title="full stack developer"
                            text="capable in the front-end, at home in the back-end"
                            img={DatabaseIcon}
                        />
                        <FeedItem
                            title="full stack developer"
                            text="capable in the front-end, at home in the back-end"
                            img={Spring}
                        />
                    </div>
                )
            }
            case "contact": {
                return (
                    <div className={classes.content}>
                        <FeedItem
                            title="full stack developer"
                            text="capable in the front-end, at home in the back-end"
                            img={DatabaseIcon}
                        />
                        <FeedItem
                            title="experienced system architect"
                            text="from data modelling to kafka implementations"
                            img={Kafka}
                        />
                    </div>
                )
            }
        }
    }

    return (
        <div className={classes.content}>
            {togglePage(page)}
        </div>
    );
}

export default Feed;