import React from 'react';

const Jumbotron = ({ img = 'assets/img/avataaars.svg', heading = 'Name', description = 'Description' })=>(
    <header className ="masthead bg-primary text-white text-center">
        <div className ="container d-flex align-items-center flex-column">
            
                <img className ="masthead-avatar mb-5" src={img} alt="" />
            
<h1 className ="masthead-heading text-uppercase mb-0">{heading}</h1>
           
                <div className ="divider-custom divider-light">
                <div className ="divider-custom-line"></div>
                <div className ="divider-custom-icon"><i className ="fas fa-star"></i></div>
                <div className ="divider-custom-line"></div>
            </div>
            
                <p className ="masthead-subheading font-weight-light mb-0">{description}</p>
        </div>
    </header>
) 

export default Jumbotron;