import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import BuyPage from './components/Buy/BuyPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< App />}></Route>
                <Route path="/buy" element={< BuyPage />}></Route>
                <Route path='/sign-up' element={<SignIn/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
