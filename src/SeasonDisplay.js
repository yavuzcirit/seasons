import './SeasonDisplay.css'
import React from "react";
import Clock from './Clock'



const seasonConfig={
  summer:{
    text:'Let us Hit the Beach!',
    iconName:'sun'
  },
  winter:{
    text:'Burr it is cold!',
    iconName:'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text,iconName} = seasonConfig[season]




  return (<div className={`season-display ${season}`}>

            <i className={`icon-left massive ${iconName} icon`}/>
            <div className='timer'><Clock/></div>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>




    </div>
    );
};

export default SeasonDisplay;
