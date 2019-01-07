import React from 'react';
import jawann from './images/jawann.jpg';

const Home = props => {
    return (
        <div className="aboutMe">
            <picture>
                <img src={jawann} alt="" className="aboutMe__image" />
            </picture>
            <div className="aboutMe-description">
                
                    <h4>Full Stack Javascript Web Developer</h4>
                   
                    <ul >
                        <li className="aboutMe-description__bullets">
                            I am a driven, self-taught web developer excited to use my extensive knowledge of Javascript to build highly performant, responsive websites. 
                        </li> 

                        <li className="aboutMe-description__bullets">
                            Currently, I freelance as a Email Developer for <a href="https://www.paulstuart.com/" className="aboutMe-description__links">Paul Stuart</a>. I've previously spent time freelancing as a junior web developer for <a href="http://13milliseconds.com/" className="aboutMe-description__links">13milliseconds</a>.
                        </li>
                        
                        <li className="aboutMe-description__bullets">
                        I recently graduated from Udacity Mobile Web Specialist Nanodegree Program that I was able to attend after earning a Grow With Google Scholarship. In this program, I was able to take my knowledge of front end web development and build mobile responsive, accessible, performant Progressive Web Applications. 
                        </li>
                        
                        <li>
                        I'm a fast learning, jack of all trades who adapts to any challenge. Over the past few years, I've created a <a href="https://www.youtube.com/watch?v=BMKfJ0rEjDo" className="aboutMe-description__links">youtube sketch video with over 10k views</a>, run a successful standup comedy show,
                        and started a culinary event company called <a href="http://www.thekitchenclash.com" className="aboutMe-description__links">Kitchen Clash</a>. While these have been fun for me, web development is what truly drives me.
                        </li>
                     
                    </ul>
                     <div>
                        <ul className="carmona-links">
                            <li>
                                <a href="https://www.github.com/jcarmona120" className="carmona-links_link">GITHUB</a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/jawannforall" className="carmona-links_link">TWITTER</a>
                            </li>
                            <li>
                                <a href="https://codepen.io/jcarmona120/" className="carmona-links_link">CODEPEN</a>
                            </li>
                        </ul>
                    </div>
                    <p>
                        <a href="https://medium.com/@jawanncarmona" className="aboutMe-blog carmona-links_link">Check out my latest blog post here!</a>
                    </p>
                </div>

        </div>
    )
}

export default Home;