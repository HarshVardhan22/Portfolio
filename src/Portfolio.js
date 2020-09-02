import React from 'react';
import Skills from './Skills';
import Details from './Details';
import Boot from './Boot.png';
import JS from './JS.png';
import CSS from './CSS.png';
import HTML from './HTML.png';
import Reactpic from './Reactpic.png';
import Node from './Node.png';
import JavaProject from './JavaProject.png';
import BootProject from './BootProject.png';
import HtmlProject from './HtmlProject.png';
import CssProject from './CssProject.png';
import ReactProject from './ReactProject.png';


const Portfolio = () =>(
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
            </div>
           
            <div class="row">
                <Skills img={Node} index = "#portfolioModal1"/> {/*({ img = 'assets/img/portfolio/cabin.png', index = "#portfolioModal1" }) */}
                <Skills img={JS} index="#portfolioModal2" /> 
                <Skills img={Boot}  index="#portfolioModal3"/> 
                <Skills img={HTML} index="#portfolioModal4"/> 
                <Skills img={CSS} index="#portfolioModal5"/>
                <Skills img={Reactpic} index="#portfolioModal6"/>
            </div>
            <Details index='portfolioModal1' title = "Node" img = 'assets/img/portfolio/cake.png' des ='Project Under Developement' /> {/*({ index = 'portfolioModal1', title = "Title", img = 'assets/img/portfolio/cake.png', des ='Lorem Ipsum'})  */}
            <Details index='portfolioModal2' title="JavaScript" img= {JavaProject} des='Movie-Ticket Booking Application' />
            <Details index='portfolioModal3' title="Bootstap 4" img= {BootProject} des="Let's Travel" />
            <Details index='portfolioModal4' title="HTML 5" img= {HtmlProject} des='Coffee and Cake' />
            <Details index='portfolioModal5' title="CSS 3" img= {CssProject} des='Drumsticks' />
            <Details index='portfolioModal6' title="React" img={ReactProject} des='Portfolio' />
                
        </div>
    </section>
)

export default Portfolio;