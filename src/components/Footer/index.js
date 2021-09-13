import React from 'react';
import Github from '../../imgs/github.png';
import Linkedin from '../../imgs/linkedin.png';
import Twitter from '../../imgs/twitter.png';

function Footer (){
    return (
        <footer>
            <br />
            <div className="icons">
                <a href="https://github.com/mayuranswee23" target="blank"><img className="project-img" src={Github} alt=""/></a>
                <a href="https://ca.linkedin.com/" target="blank"><img className="project-img" src={Linkedin} alt=""/></a>
                <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="blank"><img className="project-img" src={Twitter} alt=""/></a>
            </div>
        </footer>
    )
}


export default Footer;