import React from 'react';
import photo from "../../imgs/photo.jpg.jpg"

function Portfolio(){
    const currentCategory = {
        name: "about",
        description: "about moi"
    };
    return(
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
          <img
            src={photo}
            style={{ width: "50%"}}
            alt="Example"
            className="img-thumbnail mx-1"
          />
      </div>
        </section>
    )
}

export default Portfolio;