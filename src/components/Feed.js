import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Feed({ page }) {
    const classes = useStyles();

    const togglePage = (page) => {
        switch (page) {
            case "main": {
                return (
                <Typography className={classes.title}>
                    I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press!

                    I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? Be careful, or I will spill the beans on your placeholder text.

                    When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina.
                </Typography>
                )
            }
            case "about": {
                return (
                <Typography className={classes.title}>
                    balls
                </Typography>
                )
            }
            case "github": {
                return (
                <Typography className={classes.title}>
                    nerds
                </Typography>
                )
            }
            case "contact": {
                return (
                    <Typography className={classes.title}>
                        dicks
                    </Typography>
                )
            }
        }
    }

    return (
        <div className="feedItem">
            <Box m={4}>
                {togglePage(page)}
            </Box>
        </div>
    );
}

export default Feed;