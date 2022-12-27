import React from "react";
import "./sec4.css";
import strgr from "../../../../resource/section 4/strgr.jpg";
import boxshot from "../../../../resource/section 4/boxshot.png";

const Section4 = () => {
  return (
    <div className="sec4">
      <div className="sec4-img">
        <img src={strgr} alt="" />
        
        <div className="boxshot">
          <div className="box-img">
            <img src={boxshot} alt="" />
          </div>
          <div className="box-content">
            <h2>Stranger Things</h2>
            <p>Downloading...</p>
          </div>
          
          <div className="circle"></div>
        </div>
      </div>

      
     

      <div className="sec4-content">
        <h1>Download your shows to watch offline.</h1>
        <h2>Save your favourites easily and always have something to watch.</h2>
      </div>
    </div>
  );
};

export default Section4;
