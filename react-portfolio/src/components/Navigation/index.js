import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'

function Navigation (props){
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

      
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);
    // function categorySelected(name){
    //     console.log(`${name} clicked`)
    // }

    return(
        <header>
  <h2>
    <a href="/">
      Mayuran Sweentherarajah
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
        </li>
        {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                  {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>
        </header>
    );
}

export default Navigation;