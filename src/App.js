import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Feed from './components/Feed';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#C8E6C9',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
  },
  content: {
  },
  nav: {
    width: '72px'
  },
  feedItem: {
    display: 'flex'
  }
}));


function App(props) {
  const [page, handlePage] = React.useState("main");
  const setPage = (newPage) => {
    handlePage(newPage)
  }
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container className={classes.grid}>
          <div className="nav">
            <Grid item className={classes.nav}>
            <Navigation handlePage={setPage} />
          </Grid>
          </div>
          
          <Grid item className={classes.content} >
            <Header />
            <Feed page={page} />
            <Divider />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
