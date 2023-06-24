import './App.css';

import NavBar from './components/NavBar/NavBar';
import CampaignSlides from './components/CampaignSlides/CampaignSlides';
import MarketBody from './components/MarketBody/MarketBody';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
       <NavBar/>
       <CampaignSlides/>
       <MarketBody/>
       <Footer/>
    </div>
  );
}

export default App;
