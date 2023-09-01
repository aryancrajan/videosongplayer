import React from "react";
import ReactPlayer from 'react-player'

 
function Player(props){
   const {url}=props
    return(
        <div className="player">
            <p>Enjoy Ad free Music</p>
            <ReactPlayer url={url}controls={true} />
        </div>
    )

}

export default Player