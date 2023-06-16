import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Announcements from "./components/Announcements";
import ImageSlide from "./components/ImageSlide";
import ShopCard from "./components/ShopCard";
import ShopSection from "./components/ShopSection";

function App() {
  return (
    <div className="App">
      <Announcements />
      <NavBar />
      <ImageSlide />
      <ShopSection />
    </div>
  );
}

export default App;
