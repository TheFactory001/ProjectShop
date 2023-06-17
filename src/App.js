import './App.css';

import NavBar from './components/NavBar/NavBar';
import CampaignSlides from './components/CampaignSlides/CampaignSlides';
import MarketBody from './components/MarketBody/MarketBody';


function App() {
  return (
    <div className="App">
       <NavBar/>
       <CampaignSlides/>
       <MarketBody/>
    </div>
  );
}

export default App;
