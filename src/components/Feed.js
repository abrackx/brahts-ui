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
import University from '../imgs/usf.svg'
import Java from '../imgs/java.svg'
import Email from '../imgs/email.svg'

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
                            title="enterprise ready"
                            text="designing software built to last"
                            img={Spring}
                        />
                        <FeedItem
                            title="experienced system architect"
                            text="from data modeling to kafka implementations"
                            img={Kafka}
                        />
                    </div>
                )
            }
            case "about": {
                return (
                    <div className={classes.content}>
                        <FeedItem
                            title="academic foundations"
                            text="completed b.a. in mathematics at the university of south florida"
                            img={University}
                        />
                        <FeedItem
                            title="career experience"
                            text="currently wearing many hats at Masonite International, programming in Java 8 using Spring"
                            img={Java}
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
                            title="reach out"
                            text="feel free to contact me with gigs, advice, song requests or whatever else you can think of at abrackx@gmail.com"
                            img={Email}
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