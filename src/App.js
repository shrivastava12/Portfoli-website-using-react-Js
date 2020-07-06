import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';


const App =  () => {
    return(
        <div>
        <Navbar/>
        <Hero/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
        <Copyright/>
        </div>
    );
};

export default App;