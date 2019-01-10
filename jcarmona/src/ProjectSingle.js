import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectSingle = props => {

    const { project } = props
    const projectName = project.name.split(' ').join('').replace(/['"]+/g, '').toLowerCase()
    const thumbnails = [
        './images/' + projectName + '/thumbnails/' + projectName + '_one.png',
        './images/' + projectName + '/thumbnails/' + projectName + '_two.png',
        './images/' + projectName + '/thumbnails/' + projectName + '_three.png'
    ]

    const showThumbnails = thumbnails.map(thumbnail => {
        try {
            return <div class="project_carousel"><img src={require(`${thumbnail}`)} alt="project images" class="project-thumbnails" /></div>
           } catch (err) {
            return null;
           }
        
    })
    
    const techStack = project.skills.map(skill => <li className="projectSingle-skills__skill">{skill}</li>)

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        className: 'project-slider',
        fade: true,
        prevArrow: <p id="project-prev">Prev</p>,
      };

    const website = project.website
    console.log(website.length)



    console.log(showThumbnails)

    return (
        <div class="wrapper">
            <div class="projectSingle-wrapper">
                <div>
                {website.length > 0 ? 
                    <h1 class="projectSingle-title">{project.name}<span class="projectSingle-website"><a href={project.website}>Visit the Website</a></span></h1>
                    : <h1 class="projectSingle-title">{project.name}</h1>
                }

                      
                   
                    
                </div>
                <div>
                    <p class="projectSingle-description">{project.short_description}</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {showThumbnails}
                    </Slider>
                </div>
                <section class="project_section">
                    <h3 className="projectSingle-subtitle">Project Description</h3>
                    <p class="projectSingle-description">{project.description}</p>
                 </section>
                <section class="project_section">
                    <h3 className="projectSingle-subtitle">Tech Stack</h3>
                    <ul className="projectSingle-skills">
                        {techStack}
                    </ul>
                </section>
             

            </div>
        </div>
    )
}

export default ProjectSingle;