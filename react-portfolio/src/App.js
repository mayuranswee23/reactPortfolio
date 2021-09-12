import React, {useState} from 'react';
// import About from './components/About';
import Navigation from './components/Navigation';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Pages'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  
  const [page] = useState([
    { name: 'Contact'},
    { name: 'About' },
    { name: 'Portfolio'},
    { name: 'Resume' },
  ]);

  

  const [currentPage, setCurrentPage] = useState(page[1]);


  return (
    <div>
      <Header></Header>
      <Navigation 
      page={page}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Navigation>
      <main>
        <Page
          currentPage={currentPage}
      />
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
