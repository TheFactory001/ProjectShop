import './App.css';

import NavBar from './components/NavBar/NavBar';
import image from './asset/water-waterfall.gif'

function App() {
  return (
    <div className="App">
       <NavBar/>
       <img src={image} className="landingGif" resizeMode="contain" alt="loading..." />
        <p>
          The Factory annual project is a go!
        </p>
     
    </div>
  );
}

export default App;
