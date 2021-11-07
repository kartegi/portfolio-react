import './App.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Burger from './components/burger/Burger';
import { useState } from 'react';
import "scroll-behavior-polyfill";
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Project from './components/project/Project';

function App() {
  const [burgerShow, setBurger] = useState(false)
  const [scroll, setScroll] = useState(false)
  
  const handleBurgerClick = () => {
    setBurger(!burgerShow)
  }

  const getScroll = (scrollVal) => {
    setScroll(scrollVal)
  }
  

  return (
    <div className="App" >
      <Router>
        <Header getScroll={getScroll} handleBurgerClick={handleBurgerClick} />
        <Burger scroll={scroll} show={burgerShow} handleBurgerClick={handleBurgerClick} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/project/:id' component={Project} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
