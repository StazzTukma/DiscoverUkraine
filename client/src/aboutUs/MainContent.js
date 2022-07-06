import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import React  from 'react';
import './style.css';
import aboutUsPhoto_3 from '../images/aboutUsPhoto.jpg'

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
    width: '75%',
    height: 450,
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
              We always wanted to create usefull aplication for citizens of Ukraine
              to transport easily throw a lot of different cities and have a great 
              time in all of this routes. So we decided to help this people and make 
              something that will be usefull for everyone.

              We partner with cities, transportation authorities, broadcasters, businesses,
              and first responders to ensure our community-driven data helps as many people
              as possible, saving valuable minutes and even lives each and every day

              If u want to remember your routes you should register throw button "Login in"

              We hope that community will support our desire in improving navigation
              throw heavely-passed zones, and we will have possibilities to make our 
              world better.

              We have a lot of plans for future, for example we want to improve our system
              of navigation in the small cities, also we will add API that will collaborate
              with Google and disolve errors in navigation in small towns. 

              We will do our best to make our life easier and comfortable
          </Typography>
        </div>
        <Typography variant='h2' className={classes.title_text}><b>Our team</b></Typography>
        <div className={classes.row}>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src='' className={classes.img} alt="no photo yet!"></img>
                <div className={classes.container}>
                  <Typography variant='h4' className={classes.name}><b>Yehor</b></Typography>
                  <Typography paragraph className={classes.titleName}></Typography>
                  <Typography paragraph className={classes.aboutTeam}>Frontend Developer.</Typography>
                  <Typography paragraph className={classes.email}>yehor.bilokin@ukma.edu.ua</Typography>
                  <Typography paragraph><button className={classes.button}><a href='mailto:yehor.bilokin@ukma.edu.ua'>Contact</a></button></Typography>
                </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src='https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.6435-9/204111379_2972795136341240_7577623586151942993_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PL9eHlFDV6kAX_ydOMg&_nc_ht=scontent.fkbp1-1.fna&oh=00_AT_sbQ3YBMPZfQEf6leJt0qX0YVIb6sHzsvTDXjH6vPvnQ&oe=62EA1136' className={classes.img}></img>
                <div className={classes.container}>
                  <Typography variant='h4' className={classes.name}><b>Andrew</b></Typography>
                  <Typography paragraph className={classes.titleName}></Typography>
                  <Typography paragraph className={classes.aboutTeam}>Content creator. Tester</Typography>
                  <Typography paragraph className={classes.email}>andrii.ivanov@ukma.edu.ua</Typography>
                  <Typography paragraph><button className={classes.button}><a href='mailto:andrii.ivanov@ukma.edu.ua'>Contact</a></button></Typography>
                </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src={aboutUsPhoto_3} className={classes.img}></img>
                <div className={classes.container}>
                  <Typography variant='h4' className={classes.name}><b>Stas</b></Typography>
                  <Typography paragraph className={classes.titleName}></Typography>
                  <Typography paragraph className={classes.aboutTeam}>Backend Developer.</Typography>
                  <Typography paragraph className={classes.email}>stanislav.nazarenko@ukma.edu.ua</Typography>
                  <Typography paragraph><button className={classes.button}><a href='mailto:stanislav.nazarenko@ukma.edu.ua'>Contact</a></button></Typography>
                </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default MainContent;