//import ReactPlayer from 'react-player'
import './App.css';
import Player from './player';
import React, {useState} from 'react';

function App() {
  let [showComponent, setShowComponent] = useState(false);
  let [url,setUrl]=useState('');
  const handleViewClick=()=>{
    setShowComponent(true);
  };
  const handleChange = (event) => {
    setUrl(event.target.value);
  }
  return (
    <div className="Video Player">
      <center><p>React Video Player</p>
       <br />

       <label>
        <h1>Music</h1><br />
        <input
          type="radio"
          name="music"
          value="https://youtu.be/Rz-hqTc1KXk?si=Q6Ax8Vllevhx8gYs"
          onChange={handleChange}
        /> Vettam
      </label>
      <label>
        <input
          type="radio"
          name="music"
          value="https://youtu.be/yTRHnroQZuM?si=N97uG5waBETPbL5K"
          onChange={handleChange}
        /> Ranam
      </label>
      <label>
        <input
          type="radio"
          name="music"
          value="https://youtu.be/6LD30ChPsSs?si=fYZX9_QLfpM9zRdJ"
          onChange={handleChange}
        /> Life of Ram
      </label>
      <br /> <button onClick={handleViewClick}>View Video</button>
       {showComponent && <Player url= {url} />}

      </center>
    </div>
  );
}

export default App;