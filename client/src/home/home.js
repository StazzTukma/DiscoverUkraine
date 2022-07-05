import React  from 'react';
import Content from './content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      width: '100%',
      minWidth: '100%',
      "@media (max-width: 768px)": {
        marginTop: 74,
      },
      "@media (min-width: 768px)": {
        marginTop: 77.5,
      },
    },
    
  }));
  
  function Home() {
    const classes = useStyles();
  
    return (
      <main>
        <div className={classes.root}>
            <Content/>
        </div>
      </main>
    );
  }
  
  export default Home;