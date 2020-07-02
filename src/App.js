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
  content: {
    width: '99%'
  },
  root: {
    display: 'flex',
    textAlign: 'center'
  }
}));


function App(props) {
  const [page, handlePage] = React.useState("main");
  const setPage = (newPage) => {
    handlePage(newPage)
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Navigation handlePage={setPage} />
        <main className={classes.content}>
          <Header />
          <Feed page={page} />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
