import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './pages/BookList';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<BookList />} path="/" />
          <Route element={<Categories />} path="/categories" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
