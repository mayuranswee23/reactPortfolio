import React from 'react';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import About from '../About';
import Resume from '../Resume'

function Page({currentPage}) {

    const renderPage = () => {

        switch(currentPage.name){
            case 'Resume':
                return <Resume />;
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