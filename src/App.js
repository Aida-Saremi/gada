import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Sidebar from './components/Sidebar';
// import components

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
