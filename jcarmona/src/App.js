import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import data from './projectdb.js';

import './App.css';
import Home from './Home';
import Projects from './Projects';
import ProjectSingle from './ProjectSingle';

import Github from './images/github-10-xxl.png'
import Twitter from './images/twitter-5-xxl.png'
import Codepen from './images/codepen_logo_html_code_css_javascript_programming-512.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
              <div>
                <h1 className="App-title"><Link to="/">Jawann Carmona</Link></h1>
                <p className="App-title_subtitle">Full Stack Web Developer</p>
              </div>
              
              <div>
                <ul class="App-nav">
                <li class="App-nav_link ">
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          </header>
            <Route exact path="/" component={Home} />
            <Route 
              path="/projects/:id" 
              render={({match}) => {
                const projectsObj = data.projects
                var arr = []
                for (var key in projectsObj) {
                  arr.push(projectsObj[key])
                }
                const selectedProject = arr.filter(item => item.link === match.url)
                console.log(selectedProject)
                return <ProjectSingle project={selectedProject[0]} />}
              }
            />
            <Route exact path="/projects" component={Projects} />
            
        </div>
      </Router>
    );
  }
}

export default App;
