import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/books" className="text-white hover:text-gray-300">Livres</Link>
        </li>
        <li>
          <Link to="/poids-ideal" className="text-white hover:text-gray-300">Poids Idéal</Link>
        </li>
        <li>
          <Link to="/covid" className="text-white hover:text-gray-300">Covid</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;