import React, {useState} from 'react';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import About from '../About';
// import Resume from '../Resume'

function Page({currentPage}) {

    // const [page] = useState([
    //     { name: 'Contact'},
    //     { name: 'About' },
    //     { name: 'Portfolio'},
    //     { name: 'Resume' },
    //   ]);

    const renderPage = () => {

        switch(currentPage.name){
            // case 'About':
            //     return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            default:
                return <About />
        }
    }


return (
    <section>
        {renderPage(currentPage)}
    </section>
    
)
}

export default Page;