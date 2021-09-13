import React from 'react';
import Resumepage from '../../imgs/Resume.pdf'
function Resume(){
    return (
    
    <div>
        <p> Click here to see my <a href={Resumepage}  download> Resume</a></p>
        <p>During my time at the University of Toronto Bootcamp, I have learnt the following</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Third Party API's</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Databases</li>
            <li>React</li>
        </ul>
    </div>
    )

}

export default Resume;
