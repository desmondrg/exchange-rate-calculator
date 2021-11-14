import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './features/front/pages/LandingPage';
import InfoLayout from './features/info/InfoLayout';
import AboutUsPage from './features/info/pages/AboutUsPage';
import TermsAndConditionsPage from './features/info/pages/TermsAndConditionsPage';
import AppLayout from './shared/components/layouts/AppLayout';

function App() {
  return (
    <div className="App">
        <AppLayout>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/info" element={<InfoLayout />}>
                    <Route path='about-us' element={<AboutUsPage/>}/>
                    <Route path='terms-and-conditions' element={<TermsAndConditionsPage/>}/>
                </Route>
            </Routes>
        </AppLayout>
    </div>
  );
}

export default App;
