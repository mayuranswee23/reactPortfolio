import React from 'react';
// import photo from "../../imgs/photo.jpg.jpg"
import Survey from '../../imgs/survey.JPG';
import Crunch from '../../imgs/crunchtime.JPG';
import Budget from '../../imgs/budgettracker.JPG';
import Note from '../../imgs/notetaker.JPG';
import Weather from '../../imgs/weather.JPG';
import Work from '../../imgs/workday.JPG';


function Portfolio(){
    const currentCategory = {
        name: "Portfolio",
        description: "Below are some of the projects I created during the bootcamp"
    };
    return(
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
            <a href="https://safe-earth-34464.herokuapp.com/" target="blank">
          <img
            src={Survey}
            style={{ width: "35%"}}
            alt=""
            className="img-thumbnail mx-1"
          />
            </a>
      </div>
      <div className="flex-row">
      <a href="https://crunchteam04.github.io/Crunch-Time/" target="blank">
          <img
            src={Crunch}
            style={{ width: "35%"}}
            alt=""
            className="img-thumbnail mx-1"
          />
            </a>
      </div>
      <div className="flex-row">
      <a href="https://hidden-hollows-18250.herokuapp.com/" target="blank">
          <img
            src={Budget}
            style={{ width: "35%"}}
            alt=""
            className="img-thumbnail mx-1"
          />
            </a>
      </div>
      <div className="flex-row">
      <a href="https://tranquil-mesa-42862.herokuapp.com/notes" target="blank">
          <img
            src={Note}
            style={{ width: "35%"}}
            alt=""
            className="img-thumbnail mx-1"
          />
            </a>
      </div>
      <div className="flex-row">
      <a href="https://mayuranswee23.github.io/WeatherApp/" target="blank">
          <img
            src={Weather}
            style={{ width: "35%"}}
            alt=""
            className="img-thumbnail mx-1"
          />
            </a>
      </div>
      <div className="flex-row">
      <a href="https://mayuranswee23.github.io/WorkDayPlanner/" target="blank">
          <img
            src={Work}
            style={{ width: "35%"}}
            alt=""
            className="img-thumbnail mx-1"
          />
            </a>
      </div>
        </section>
    )
}

export default Portfolio;