import './App.css';

import NavBar from './components/NavBar/NavBar';
import CampaignSlides from './components/CampaignSlides/CampaignSlides';


function App() {
  return (
    <div className="App">
       <NavBar/>
       <CampaignSlides/>
       
        <p>
          The Factory annual project is a go!
        </p>
     
    </div>
  );
}

export default App;
