import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import BookList from './BookList';
import IdealWeightCalculator from './IdealWeightCalculator';
import CovidDataDisplay from './CovidDataDisplay';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavigationMenu />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/books" element={<BookList />} />
            <Route path="/poids-ideal" element={<IdealWeightCalculator />} />
            <Route path="/covid" element={<CovidDataDisplay />} />
            <Route path="/" element={<h1 className="text-2xl text-center">Welcome to the App</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;