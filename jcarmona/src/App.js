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
import Navigation from './Nav';

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
              

              <Navigation />
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
            <footer>
              <ul className="carmona-links">
                <li>
                  <Link to="/projects" className="carmona-links_link">PORTFOLIO</Link>
                </li>
                <li>
                    <a href="https://www.github.com/jcarmona120" target="_blank" className="carmona-links_link">GITHUB</a>
                </li>

         
                <li>
                    <a href="https://codepen.io/jcarmona120/" target="_blank" className="carmona-links_link">CODEPEN</a>
                </li>
                <li>
                    <a href="https://medium.com/@jawanncarmona" target="_blank" className="carmona-links_link">BLOG</a>
                </li>
              </ul>

              <p className="copyright">© Jawann Carmona --- {new Date().getFullYear()}</p>
            </footer>
        </div>
      </Router>
    );
  }
}

export default App;
