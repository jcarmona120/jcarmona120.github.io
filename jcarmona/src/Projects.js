import React, {Component} from 'react';
import Project from "./Project";
import data from './projectdb.js';

class Projects extends Component {

    getProjectClicked(event) {
        var target = event.currentTarget.innerHTML
        var link = `/projects/${target.split(' ').join('').toLowerCase()}`
        return link;
    }

    render() {
        
        var projects = data.projects
        console.log(projects)
        var projectMap = Object.keys(projects).map(key => {
            var project = projects[key]

            return <Project 
                title={project.name} 
                website={project.website}
                short_description={project.short_description}
                long_description={project.description}
                image={project.images}
                skills={project.skills}
                link={project.link}
                getProjectClicked = {this.getProjectClicked}
            />
        })
        return (
            <div className="main">
                {projectMap}
            </div>
        )
    }
}

export default Projects;
