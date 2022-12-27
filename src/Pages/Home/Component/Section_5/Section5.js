import React from "react";
import mac from '../../../../resource/section 5/mac.png'
import video2 from "../../../../resource/videos/video2.mp4";
import './sec5.css'

const Section5 = () => {
  return (
    <div className="sec5">

     

        <div className="sec5-content">
        <h1>Watch everywhere.</h1>
        <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </h2>
      </div>

      <div className="mac">
          <img src={mac} alt="" />
          <div className="video2">
            <video src={video2} autoPlay muted loop></video>
          </div>
        </div>
    </div>

  );
};

export default Section5;
