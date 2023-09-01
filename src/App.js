import './App.css';
import Player from './player';
import React, {useState} from 'react';
import Music from './music';

function App() {
  let [showComponent, setShowComponent] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState('');
  let [url,setUrl]=useState('');

  const handleViewClick=()=>{
    setShowComponent(true);
  };

  const handleChange = (event) => {
    setSelectedMusic(event.target.value);
    setUrl(Music[event.target.value]);
  }
  return (
    <div className="Video Player">
      <center><p>React Video Player</p>
       <br />
       {Object.entries(Music).map(([musicName, musicUrl]) => (
          <label key={musicName}>
            <input
              type="radio"
              name="music"
              value={musicName}
              checked={selectedMusic === musicName}
              onChange={handleChange}
            /> {musicName}
          </label>
        ))}
       
      <br /> <button onClick={handleViewClick}>View Video</button>
       {showComponent && <Player url= {url} />}

      </center>
    </div>
  );
}

export default App;