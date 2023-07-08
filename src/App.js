import './App.css';

import NavBar from './components/NavBar/NavBar';
import CampaignSlides from './components/CampaignSlides/CampaignSlides';
import MarketBody from './components/MarketBody/MarketBody';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn';



function App() {
  return (
    <div className="App">
       <NavBar/>
         <MarketBody/>
         <Footer/>
    </div>
  );
}

export default App;
