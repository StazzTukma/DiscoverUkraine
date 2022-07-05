import React, { useEffect, useState, Container } from "react";
import "./profile.css";
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import * as actionType from '../constants/actionTypes';
import { Button } from '@material-ui/core';


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
  return (
    <div>
      <link
        rel="stylesheet"
        href=""
      />
      <div className="card">
        <img src="img.jpg" alt="John" style={{ width: "100%" }} />
        <h1>{user?.result.name}</h1>
        <p className="title">CEO &amp; Founder, Example</p>
        <p>Harvard University</p>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <p>
            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
        </p>
      </div>
    </div>
  );
};
export default Card;