import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';

const App = () =>(
  <div>
    <Navbar title = 'Portfolio'/>    {/*   title = 'title'  */}
    <Jumbotron img='assets/img/avataaars.svg' heading = 'Harshvardhan' description = 'Electronics Engineer - Web Developer - Learner'/> {/*   img = 'img = img URL',heading= 'text' ,description = 'text' */}
    <Portfolio/>  {/*   Edit Skill.js and Details.js */}
    <About titleLeft= 'I love applying responsive design principles and watching my web pages shrink into mobile screens and still look amazing. My specialies include quickly learning new skills and programming languages. ' titleRight = 'I play guitar and I find a beautiful crossover between my software and my music which pursuits the challenge of intellect, creativity, organization, sequential processing and problem solving. This is what keeps me up at night , a never ending thirst to create beautiful, powerful things and share them with the world. '/>     {/*   titleLeft= "text",titleRight = "text" */}
    <Contact />   
    <Footer />    {/*   line1 = 'Address Line 1', line2 = 'Address Line 2',fb, twitter,insta,dribble  */}
  </div>
)

export default App;
