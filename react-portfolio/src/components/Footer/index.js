import React from 'react';
import Github from '../../imgs/github.png';
import Linkedin from '../../imgs/linkedin.png';
import Twitter from '../../imgs/twitter.png';

function Footer (){
    return (
        <footer>
            <br />
            <div className="icons">
                <a href="www.google.com" target="blank"><img className="project-img" src={Github} alt=""/></a>
                <a href="www.google.com" target="blank"><img className="project-img" src={Linkedin} alt=""/></a>
                <a href="www.google.com" target="blank"><img className="project-img" src={Twitter} alt=""/></a>
            </div>
        </footer>
    )
}


export default Footer;