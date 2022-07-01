import React, { Component }  from 'react';
import MainContent from './MainContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    "@media (max-width: 768px)": {
      marginTop: 74,
    },
    "@media (min-width: 768px)": {
      marginTop: 77.5,
    },
  },
  
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.root}>
        <MainContent/>
      </div>
    </main>
  );
}

export default AboutUs;