import React, { useState } from "react";
import "./grid.css";
import { posterHover } from "../../../../data";

const Grid = () => {

  const[startVid, selectVid] = useState(null);
  const posterClick = (index)=>{
    if(startVid === index){
      return selectVid(null)
    }
    else{
      selectVid(index);
    }

  }

 
  return (
    <div className="grid-sec">
      <h1>Previews</h1>

      <div className="player-container">
        <div className="gallery">
          {posterHover.map((item, index) => {
            return (
              <div className="images"  onClick={()=> posterClick(index)} key={index}>
                <img src={item.srcImg} alt="" />
                <div className="hover-text">
                  <h2>{item.movieName}</h2>
                  <p>{item.movieDetails}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="trailer-player">
          <div className="video-play">
          {posterHover.map((thumbVid, index)=>{
            return(
            
              <video className={startVid === index ? "video-play": "video-stop"} src={thumbVid.scrVid} controls autoPlay muted></video>
            )
          })}


        </div>
      </div>
      </div>

    
    </div>
  );
};

export default Grid;
