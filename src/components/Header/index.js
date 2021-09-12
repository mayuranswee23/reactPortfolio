import React from 'react';
import photo from "../../imgs/avatar.svg"

function Header(){
    return(
        <header>
            <div class="header">
    <img
            src={photo}
            style={{ width: "5%"}}
            alt="Example"
            className="photo"
          />
           <h2 className="portfolioName">
    <a href="/">
      Mayuran Sweentherarajah
    </a>
    </h2>
    </div>
 
        </header>
    )
}

export default Header;