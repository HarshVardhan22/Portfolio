import React from 'react'

const About = ({titleLeft= "text",titleRight = "text" })=>(
    <section className ="page-section bg-primary text-white mb-0" id="about">
        <div className ="container">
            
                <h2 className ="page-section-heading text-center text-uppercase text-white">About</h2>
            
                <div className ="divider-custom divider-light">
                <div className ="divider-custom-line"></div>
                <div className ="divider-custom-icon"><i className ="fas fa-star"></i></div>
                <div className ="divider-custom-line"></div>
            </div>
            
                <div className ="row">
                <div className ="col-lg-4 ml-auto"><p className ="lead">{titleLeft}</p></div>
                <div className ="col-lg-4 mr-auto"><p className ="lead">{titleRight}</p></div>
            </div>
            
                <div className ="text-center mt-4">
                <a className ="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
                    <i className ="fas fa-download mr-2"></i>
                        Free Download!
                    </a>
            </div>
        </div>
    </section>
)

export default About;