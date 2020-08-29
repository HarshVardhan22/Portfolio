import React from 'react';

const Footer = ({ line1 = 'Address Line 1', line2 = 'Address Line 2',fb, twitter,insta,dribble }) => (
    <div>
    <footer className ="footer text-center">
        <div className ="container">
            <div className ="row">
               
                    <div className ="col-lg-4 mb-5 mb-lg-0">
                    <h4 className ="text-uppercase mb-4">Location</h4>
                    <p className ="lead mb-0">
                        {line1}
                        <br />
                        {line2}
                        </p>
                </div>
                
                    <div className ="col-lg-4 mb-5 mb-lg-0">
                    <h4 className ="text-uppercase mb-4">Around the Web</h4>
                    <a className ="btn btn-outline-light btn-social mx-1" href={fb} ><i className ="fab fa-fw fa-facebook-f"></i></a>
                    <a className ="btn btn-outline-light btn-social mx-1" href= {twitter}><i className ="fab fa-fw fa-twitter"></i></a>
                    <a className ="btn btn-outline-light btn-social mx-1" href= {insta} ><i className ="fab fa-fw fa-linkedin-in"></i></a>
                    <a className ="btn btn-outline-light btn-social mx-1" href= {dribble}><i className ="fab fa-fw fa-dribbble"></i></a>
                </div>
              
                    <div className ="col-lg-4">
                    <h4 className ="text-uppercase mb-4">About Portfolio</h4>
                    <p className ="lead mb-0">
                        Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                </div>
            </div>
        </div>
      
    </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © Your Website 2020</small></div>
        </div>
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>
    </div>    
);

export default Footer;