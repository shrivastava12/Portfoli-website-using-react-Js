import React from 'react';
import "./style.css";
import Card from './card';
import cake from './img/cake.png'
import cabin from './img/cabin.png'

const Portfolio = () => {

    return(

        <section className="page-section portfolio" id="portfolio">
        <div className="container">
           
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
         
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        
            <div className="row">
             
                <div className="col-md-6 col-lg-4 mb-5">
                    <Card imgsrc={cabin}/>
                </div>
              
                <div className="col-md-6 col-lg-4 mb-5">
                    <Card imgsrc={cake}/>
                </div>
            
                <div className="col-md-6 col-lg-4 mb-5">
                <Card imgsrc={cabin}/>
                </div>
                
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <Card imgsrc={cabin}/>
                </div>
             
                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <Card imgsrc={cake}/>
                </div>
                
                <div className="col-md-6 col-lg-4">
                <Card imgsrc={cabin}/>
                </div>
            </div>
        </div>
    </section>

    );

};

export default Portfolio;