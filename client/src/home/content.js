import React  from 'react';
import { useState, useEffect } from "react";
import Popup from './Popup';  
import './style.css';
import Map from "../images/map.png"
import { Box} from "@material-ui/core";
import { cities, search} from '../LocalDB';
import arrow from '../images/arrow.png'
import { generatePath } from 'react-router-dom';

const mapGen = (
    <Box
            component="img"
            height='100%'
            width='80%'
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
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [showPopup, setShowPopup] = useState(false);


      function togglePopup() {  
        setShowPopup(true);
       }  

       function togglePopupClose(){
        setShowPopup(false);
       }

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
        refreshStyles();
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }

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
          id='marker'
          style={renderStyle(top, left)} 
          onClick={() => {UpdateClick(index)}}>
          </button>
        );

        function renderStyle(top, left){
          var style;
          if(windowSize.innerWidth < 321){
            style = {
              marginTop: 160,
              marginLeft: windowSize.innerWidth*0.12,
              top: top/2-10,
              left: left*1.6*0.8+'%',
              height: 35,
              width: 35,
              borderRadius: 30,
              backgroundColor: 'red',
              opacity: 0.5,
              position: 'absolute',};
            }

            if(windowSize.innerWidth > 320 && windowSize.innerWidth < 376){
              style = {
                marginTop: 160,
                marginLeft: windowSize.innerWidth*0.1,
                top: top/2-10,
                left: left*1.4*0.8+'%',
                height: 45,
                width: 45,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                opacity: 0.5,
                position: 'absolute',};
              }

          if (windowSize.innerWidth > 960) {
            style = {
              marginTop: 163.5,
              top: top,
              left: left*0.8+'%',
              marginLeft: windowSize.innerWidth*0.075,
              height: 45,
              width: 45,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              opacity: 0.5,
              position: 'absolute',};
          }

          if(windowSize.innerWidth === 768){
            style = {
              marginTop: 160,
              marginLeft: windowSize.innerWidth*0.09,
              top: top/2-10,
              left: left*1.35*0.8+'%',
              height: 35,
              width: 35,
              borderRadius: 30,
              backgroundColor: 'red',
              opacity: 0.5,
              position: 'absolute',};
          }

          return style;
        }

        function refreshStyles(){
        
        }
        
        return(
          <div className="main">
              <div className="head">
                  <input type="text" disabled placeholder="City1" id="city1" onChange={city1Change} value={city1}></input>
                  <img src={arrow} length="5%" width="3%"></img>
                  <input type="text" disabled placeholder="City2" id='city2' onChange={city2Change} value={city2}></input>
                  <input type="submit" value="Find a path" onClick={togglePopup}></input>
              </div>
              <div className="mainform">
              <div className="mapColumn">
                {mapGen}
                <Marker index={1} top={72} left={11.25} />
                <Marker index={2} top={94} left={18.5} />
                <Marker index={3} top={130} left={27} />
                <Marker index={4} top={160} left={34} />
                <Marker index={5} top={84} left={38.75} />
                <Marker index={6} top={116} left={46.25} />
                <Marker index={7} top={205} left={48.75} />
                <Marker index={8} top={212} left={58.5} />
                <Marker index={9} top={230} left={65.75} />
                <Marker index={10} top={307} left={61.75} />
                <Marker index={11} top={360} left={55.25} />
                <Marker index={12} top={315} left={47.75} />
                <Marker index={13} top={417} left={47.5} />
                <Marker index={14} top={512} left={47.75} />
                <Marker index={15} top={305} left={41.25} />
                <Marker index={16} top={385} left={40.5} />
                <Marker index={17} top={400} left={33.25} />
                <Marker index={18} top={238} left={37.25} />
                <Marker index={19} top={255} left={28.25} />
                <Marker index={20} top={210} left={21.5} />
                <Marker index={21} top={190} left={15.5} />
                <Marker index={22} top={180} left={7.75} />
                <Marker index={23} top={282} left={4.25} />
                <Marker index={24} top={253} left={9.75} />
                <Marker index={25} top={295} left={14.75} />
              </div>
                <div className="menuColumn">
                <input type="text" id="titleName" disabled placeholder="None" className="titleName" onChange={titleChange} value={title}></input>
                <img src={imgURL} onChange={imgURLchange} className="image"></img>
                <textarea id="textarea" disabled placeholder='Click on the city marker on the map to display the city' className="description" onChange={descriptionChange} value={description}></textarea>
                <button type="button" className="city" onClick={city1Click}>Add City1</button>
                <button type="button" className="city" onClick={city2Click}>Add City2</button>
              </div>
              {showPopup ?  
                <Popup  
                  text={city1 + '    ↔️    ' + city2}
                  closePopup={togglePopupClose}
                  city1img={search(city1, cities).imgURL}
                  city2img={search(city2, cities).imgURL}
                  />  
                : null  
                    }  
              </div>
          </div>
      );
    }
  
    export default Content;