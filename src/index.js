import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Timer from "./Components/Timer";

import App from "./App"
import Team from "./Components/Team"
import Mint from './Components/Mint'
import Faq from "./Components/Faq"
import About from "./Components/About"
import Footer from "./Components/Footer";
import reportWebVitals from './reportWebVitals';
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import Header from "./Components/Header";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RoadMap from "./Components/RoadMap";
import MintSoon from "./Components/MintSoon";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/mint" element={<MintSoon />} />
            <Route path = "/terms_of_service" element={<TermsAndConditions />} />
            <Route path = "/privacy_policy" element={<PrivacyPolicy />} />
            <Route path = "/mint_test" element={<Mint/>} />
            <Route path = "/roadmap" element = {<RoadmapNew />} />
        </Routes>
    </Router>,

    document.getElementById("root")
);