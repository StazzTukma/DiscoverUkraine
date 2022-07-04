import React  from 'react';
import { useState } from "react";
import './style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
      width: '50%',
      padding: 10,
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: 30,
        "@media (max-width: 768px)": {
          marginTop: 200,
        },
        "@media (min-width: 768px)": {
          marginTop: 203.5,
        },
      },
      
}));

function Login() {

const classes = useStyles();
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const database = [
    {
      username: "admin",
      password: "password"
    },
    {
      username: "user",
      password: "pass"
    }
  ];
  
const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

const handleSubmit = (event) => {
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    const userData = database.find((user) => user.username === uname.value);
  
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="login-form">
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
 );

    return (
        <div className="app">
          <div className={classes.form}>
            <div className="title"><b>Log In</b></div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
    }

export default Login;