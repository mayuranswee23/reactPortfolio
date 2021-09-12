import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'

function Navigation (props){
    
    const {
        page = [],
        setCurrentPage,
        currentPage,
      } = props;

      
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
      }, [currentPage]);

    return(
        
  
  <nav>
     
    <ul className="flex-row">
        {page.map((page) => (
            <li className={`mx-1 ${
                currentPage.name === page.name  && 'navActive'
                }`} key={page.name}>
              <span onClick={() => {
                setCurrentPage(page);
                }}
                >
                  {capitalizeFirstLetter(page.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>
        
    );
}

export default Navigation;