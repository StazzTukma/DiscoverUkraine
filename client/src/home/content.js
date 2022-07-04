import React  from 'react';
import { useState } from "react";
import './style.css';
import Map from "../images/map.png"
import { Box} from "@material-ui/core";
import { cities} from '../LocalDB';
import { makeStyles } from '@material-ui/core/styles';


const mapGen = (
    <Box
            component="img"
            height='100%'
            width='100%'
            alt="Map"
            src={Map}
        />
  );

  const Content = () => {
    const [title, setTitle] = useState('');
    const [imgURL, setImgURL] = useState(null);
    const [description, setDescription] = useState('');
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');

    const city1Click = event => {
      event.preventDefault();
      console.log('old value: ', city1);
  
      setCity1(document.getElementById('titleName').value);
    };

    const city1Change = event => {
      setCity2(event.target.value);
    };
  
    const city2Click = event => {
      event.preventDefault();
      console.log('old value: ', city2);
  
      setCity2(document.getElementById('titleName').value);
    };
  
    const city2Change = event => {
      setCity2(event.target.value);
    };

    function UpdateClick(n) {
      console.log('old value: ', title);

      setTitle(cities[n].name);
      setDescription(cities[n].description);
      setImgURL(cities[n].imgURL);
    };
  
    const titleChange = event => {
      setTitle(event.target.value);
    };

    const descriptionChange = event => {
      setDescription(event.target.value);
    };

    const imgURLchange = event => {
      setImgURL(event.target.value);
    };

    const Marker = ({index, top, left}) => (
          <button type="button"
          className="marker"
          style={renderStyle(top, left)} 
          onClick={() => {UpdateClick(index)}}>
          </button>
        );

        function renderStyle(top, left){
          var style;
          if (window.screen.viewport.width > 959) {
            style = {
              top: top+'%',
              left: left+'%',
              height: 65,
              width: 65,
              borderRadius: 30,
              backgroundColor: 'red',
              opacity: 0.5,
              position: 'absolute',};
          }
          else {
            
          }
          return style;
        }

    return(
        <div className="main">
            <div className="head">
                <input type="text" disabled placeholder="City1" id="city1" onChange={city1Change} value={city1}></input>
                <label>↔</label>
                <input type="text" disabled placeholder="City2" id='city2' onChange={city2Change} value={city2}></input>
                <input type="submit" value="Find a path"></input>
            </div>
            <div className="mainform">
            <div className="mapColumn">
              {mapGen}
              <Marker index={1} top={'27.75%'} left={'10.25%'} />
              <Marker index={2} top={242} left={245} />
              <Marker index={3} top={280} left={363} />
              <Marker index={4} top={312} left={465} />
              <Marker index={5} top={235} left={527} />
              <Marker index={6} top={270} left={632} />
            </div>
              <div className="menuColumn">
              <input type="text" id="titleName" disabled placeholder="None" className="titleName" onChange={titleChange} value={title}></input>
              <img src={imgURL} onChange={imgURLchange} className="image"></img>
              <textarea id="textarea" disabled placeholder='Click on the city marker on the map to display the city' className="description" onChange={descriptionChange} value={description}></textarea>
              <button type="button" className="city" onClick={city1Click}>Add City1</button>
              <button type="button" className="city" onClick={city2Click}>Add City2</button>
            </div>
            </div>
        </div>
    );
  }

  export default Content;