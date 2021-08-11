import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import LandingScreen from '../components/LandingScreen/LandingScreen';
import ProjectScreen from '../components/ProjectScreen/ProjectScreen';
import ScrollToTop from '../helpers/ScrollToTop';

const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                <ScrollToTop />
                    <Switch>
                        <Route exact path="/:titleProject" component={ProjectScreen}/>
                        <Route path="/" component={LandingScreen}/>
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>
    )
}

export default AppRouter;
