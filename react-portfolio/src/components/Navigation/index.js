import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'
import photo from "../../imgs/avatar.svg"
function Navigation (props){
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;

      
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);
    // function categorySelected(name){
    //     console.log(`${name} clicked`)
    // }

    return(
        
  
  <nav>
      {/* <div>
    <img
            src={photo}
            style={{ width: "5%"}}
            alt="Example"
            className="photo"
          />
    </div>
  <h2 className="portfolioName">
    <a href="/">
      Mayuran Sweentherarajah
    </a>
  </h2> */}
    <ul className="flex-row">
      <li className="aboutMe mx-2">
      <a data-testid="about" href="/" onClick={() => setContactSelected(false)}>
          About me
        </a>
      </li>
      <li className={`mx-2 ${contactSelected && 'navActive'}`}>
      <span onClick={() => setContactSelected(true)}>Contact</span>
        </li>
        {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`} key={category.name}>
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
                }}
                >
                  {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>
        
    );
}

export default Navigation;