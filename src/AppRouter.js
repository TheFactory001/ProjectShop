import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import BuyPage from './components/Buy/BuyPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< App />}></Route>
                <Route path="/buy"element={< BuyPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
