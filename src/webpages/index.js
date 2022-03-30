import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './index.css';
import App from '../App';
import Timer from "../Components/Timer";
import Team from "../Components/Team"
import Mint from '../Components/Mint'
import Faq from "../Components/Faq"
import About from "../Components/About"
import reportWebVitals from '../reportWebVitals';
import TermsAndConditions from "../Components/PrivacyPolicy";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import RoadMap from "../Components/RoadMap";
import MintSoon from "../Components/MintSoon";


const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {About} />
            <Route path = "/mint" component = {MintSoon} />
            <Route path = "/team" component = {Team} />
            <Route path = "/terms_of_service" component={TermsAndConditions} />
            <Route path = "/privacy_policy" component={PrivacyPolicy} />
            <Route path = "/roadmap" component={RoadMap} />
        </Router>
    );
};
export default Webpages;