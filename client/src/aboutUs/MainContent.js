import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import React, { Component }  from 'react';
import './style.css';

const useStyles = makeStyles(theme => ({
  html: {
    boxsizing: 'border-box',
  },

  container: {
    paddingLeft: 16,
    paddingRight: 16,
    "&after":{
      content: "",
      clear: 'both',
      display: 'table',
    },
  },

  row: {
    "&after":{
      content: "",
      clear: 'both',
      display: 'table',
    },
  },

  img: {
    width: '100%',
    height: 550,
  },

  title_text: {
    textAlign: 'center',
    marginTop: 50,
    color: 'white',
  },

  fullWidth: {
    width: '100%',
    marginBottom: 204,
  },

  par: {
    textAlign: 'center',
    alignContent: 'center',
    margin: 50,
    marginLeft: 100,
    marginRight: 100,
    color: 'white',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 30,
    padding: 10,
  },

  column: {
    float: 'left',
    width: '30%',
    marginBottom: 16,
    marginLeft: '1.6%',
    marginRight: '1.6%',
    background: 'rgba(0, 0, 0, 0.3)',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 18,
    paddingBottom: 10,
    borderRadius: 10,
  },

  button: {
    border: 'none',
    outline: 0,
    display: 'inline-block',
    padding: 8,
    color: 'white',
    backgroundColor: '#000',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    "&:hover": {
      backgroundColor: '#555',
    },
  },

  titleName: {
    color: 'grey',
  },

  card: {
    boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2)',
  },

  name: {
    textAlign: 'center',
    color: 'white',
  },

  email: {
    color: 'white',
  },

  aboutTeam: {
    color: 'white',
  },

  content: {

  },

  team: {

  },


  
}));

function MainContent() {
    const classes = useStyles();
  
    return (
      <main className={classes.fullWidth}>
        <div className={classes.title}>
          <Typography variant='h2' className={classes.title_text}><b>Who we are?</b></Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph className={classes.par}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat
          </Typography>
        </div>
        <Typography variant='h2' className={classes.title_text}><b>Our team</b></Typography>
        <div className={classes.row}>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src='https://anews.com/upload/post/2020/11/01/103171479/gallery/tn/280347622.jpg' className={classes.img}></img>
                <div className={classes.container}>
                  <Typography variant='h4' className={classes.name}><b>Yehor</b></Typography>
                  <Typography paragraph className={classes.titleName}></Typography>
                  <Typography paragraph className={classes.aboutTeam}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  <Typography paragraph className={classes.email}>yehor.bilokin@ukma.edu.ua</Typography>
                  <Typography paragraph><button className={classes.button}><a href='mailto:yehor.bilokin@ukma.edu.ua'>Contact</a></button></Typography>
                </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src='https://anews.com/upload/post/2020/11/01/103171479/gallery/tn/280347622.jpg' className={classes.img}></img>
                <div className={classes.container}>
                  <Typography variant='h4' className={classes.name}><b>Andrew</b></Typography>
                  <Typography paragraph className={classes.titleName}></Typography>
                  <Typography paragraph className={classes.aboutTeam}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  <Typography paragraph className={classes.email}>example@example.com</Typography>
                  <Typography paragraph><button className={classes.button}>Contact</button></Typography>
                </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src='https://anews.com/upload/post/2020/11/01/103171479/gallery/tn/280347622.jpg' className={classes.img}></img>
                <div className={classes.container}>
                  <Typography variant='h4' className={classes.name}><b>Stas</b></Typography>
                  <Typography paragraph className={classes.titleName}></Typography>
                  <Typography paragraph className={classes.aboutTeam}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  <Typography paragraph className={classes.email}>example@example.com</Typography>
                  <Typography paragraph><button className={classes.button}>Contact</button></Typography>
                </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default MainContent;