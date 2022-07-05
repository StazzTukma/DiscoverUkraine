import React from 'react';  
import './popup.css';  

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup_open'>  
    <h1 className='title'>{this.props.text}</h1>
    <div className='imgContainer'>
        <img src={this.props.city1img} className='first'></img>
        <img src={this.props.city2img}></img>
    </div>
    <input type="text" id="" disabled placeholder="None" className="path" value={this.props.path1value}></input>
    <input type="text" id="" disabled placeholder="None" className="path" value={this.props.path2value}></input>
    <button type='button' onClick={this.props.closePopup}>Close Infoblock</button>  
</div>  
</div>  
);  
}  
}  
export default Popup;