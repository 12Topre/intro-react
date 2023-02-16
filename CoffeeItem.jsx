import React, { useState, useEffect } from 'react';
import Coffeeltem from './Coffeeltem';

// Parent component that displays a list of coffee items
const CoffeeView = () => {
  // State variable to store the list of coffee items
  const [coffees, setCoffees] = useState([]);

  // Fetch the list of coffee items from the API and update the state variable
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/iced')
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(error => console.log(error));
  }, []);

  // Iterate through the list of coffee items and render a Coffeeltem component for each item
  return (
    <div>
      <h1>Iced Coffees</h1>
      {coffees.map((coffee, index) => (
        <Coffeeltem key={index} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeView;