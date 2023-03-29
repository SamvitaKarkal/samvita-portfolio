import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import MyExp from './pages/MyExp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GlobalStyle from './components/GlobalStyle';
import 'remixicon/fonts/remixicon.css';

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/work' component={MyWork} />
          <Route exact path='/contact' component={ContactMe} />
          <Route exact path='/experience' component={MyExp} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
