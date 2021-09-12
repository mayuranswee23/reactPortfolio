import React, {useState} from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  const [categories] = useState([
    // {
    //   name: 'Contact'
    // },
    // { name: 'About' },
    { name: 'Portfolio'},
    { name: 'Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Navigation 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Navigation>
      <main>
      {/* <Portfolio currentCategory={currentCategory}></Portfolio> */}
      {!contactSelected ? (
  <>
    
    <About></About>
  </>
  
) : (
    <Contact></Contact>
  )}
  
      </main>
      <Footer></Footer>
    </div>
    
  );

// return (
//   <Router>
//   <>
//     <Navigation/>
//     <Switch>
//       <Route exact path="/" component={About} />
//       <Route exact path="/portfolio" component={Portfolio} />
//       <Route exact path="/contact" component={Contact} />
//       <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
//     </Switch>
//   </>
// </Router>
// )
}

export default App;
