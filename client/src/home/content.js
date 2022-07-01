import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText, Typography } from '@material-ui/core';
import React, { Component }  from 'react';
import { useState } from "react";
import './style.css';
import Map from "../images/map.png"
import { Box} from "@material-ui/core";

const mapGen = (
    <Box
            component="img"
            height='100%'
            width='100%'
            alt="Map"
            src={Map}
        />
  );

  const Kyiv = {
    name: "Kyiv",
    pictureURL: "https://images.adsttc.com/media/images/629c/d4fa/3e4b/31a7/1900/0006/newsletter/shutterstock_2092825747.jpg?1654445301",
    description: "Kyiv is the capital and most populous city of Ukraine. It is in north-central Ukraine along the Dnieper River. As of 1 January 2021, its population was 2,962,180 making Kyiv the seventh-most populous city in Europe. Kyiv is an important industrial, scientific, educational, and cultural center in Eastern Europe. It is home to many high-tech industries, higher education institutions, and historical landmarks. The city has an extensive system of public transport and infrastructure, including the Kyiv Metro. The city's name is said to derive from the name of Kyi, one of its four legendary founders. During its history, Kyiv, one of the oldest cities in Eastern Europe, passed through several stages of prominence and obscurity. The city probably existed as a commercial center as early as the 5th century. A Slavic settlement on the great trade route between Scandinavia and Constantinople, Kyiv was a tributary of the Khazars,[16] until its capture by the Varangians (Vikings) in the mid-9th century. Under Varangian rule, the city became a capital of Kievan Rus', the first East Slavic state. Completely destroyed during the Mongol invasions in 1240, the city lost most of its influence for the centuries to come. It was a provincial capital of marginal importance in the outskirts of the territories controlled by its powerful neighbours, first Lithuania, then Poland and ultimately Russia.",
  };

  const selectedCity= {
    name: "None",
    pictureURL: null,
    description: "Click on city marker on the map",
  };

  const Content = () => {
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');

    const city1Change = event => {
      setCity1(event.target.value);
    };

    const city2Change = event => {
      setCity2(event.target.value);
    };

    const city1Click = event => {
      event.preventDefault();
      console.log('old value: ', city1);
  
      setCity1(selectedCity.name);
    };

    const city2Click = event => {
      event.preventDefault();
      console.log('old value: ', city2);
  
      setCity2(selectedCity.name);
    };

    return(
        <main className="main">
            <div className="head">
                <input type="text" disabled placeholder="City1" id="city1" onChange={city1Change} value={city1}></input>
                <label>↔</label>
                <input type="text" disabled placeholder="City2" id='city2' onChange={city2Change} value={city2}></input>
                <input type="submit" value="Find a path"></input>
            </div>
            <div className="mainform">
                <div className="mapColumn">
                    {mapGen}
                </div>
                <div className="menuColumn">
                    <p className="titleName"><b>{selectedCity.name}</b></p>
                    <img src={selectedCity.pictureURL} className="image"></img>
                    <p className="description">{selectedCity.description}</p>
                    <button type="button" className="city" onClick={city1Click}>Add City1</button>
                    <button type="button" className="city" onClick={city2Click}>Add City2</button>
                </div>
            </div>
        </main>
    );
  }
  
  export default Content;