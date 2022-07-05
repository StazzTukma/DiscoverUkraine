import React, { useEffect, useState, Container } from "react";
import "./profile.css";
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import * as actionType from '../constants/actionTypes';
import { Button } from '@material-ui/core';
import profilePicture from '../images/profilePicture.png'
import profilePictureLogged from '../images/profilePictureLogged.png'


const Card = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)

    const logout = () => {
        if(!user){return;}
        dispatch({ type: actionType.LOGOUT });
        navigate('/login');
        setUser(null);
      };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token)
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    const noUser = () => {
        if(!user){
            return "You should log in!";
       }
    }  
    const noUserPicture = () => {
      if(!user){
          return profilePicture;
     }else{
          return profilePictureLogged;
     }
  } 
  return (
    <div>
      <link
        rel="stylesheet"
        href=""
      />
      <div className="card">
        <img src={noUserPicture()} alt="" style={{ width: "40%" }} />
        <h1> {noUser()} </h1>
        <h2>{user?.result.name}</h2>
        <h3>Your email: {user?.result.email}</h3>
        <h4>Your token: {user?.token}</h4>
        <p>
            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
        </p>
      </div>
    </div>
  );
};
export default Card;