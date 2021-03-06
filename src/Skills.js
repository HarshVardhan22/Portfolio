import React from 'react'

const Skills = ({ img = 'assets/img/portfolio/cabin.png', index = "#portfolioModal1" }) => (

    <div class="col-md-4 col-lg-3 mb-3">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target={index}>
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={img} alt="" />
        </div>
    </div>
)

export default Skills;