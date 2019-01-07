import React from "react";
import {Link} from 'react-router-dom';

const Project = function Project(props) {
    var skillsUsed = props.skills
    var skillsList = skillsUsed.map(skill => {
        return (
                <li>{skill}</li>
        )
    })
    return (
        <div className="projects kitchenclash">
            <div className="project-image-container">
                <img src={props.image} alt="website sample" className="project-image"/>
            </div>
            <div>
                <h3 className="project-title" ><Link to={props.link}>{props.title}</Link></h3>
                <p className="project-description">
                    {props.short_description}
                </p>
                <ul className="tech">
                {skillsList}
                </ul>
            </div>

            
        </div>
       
    )
} 

export default Project;