import React, { useState, useEffect } from 'react';
import Header from './components/Header';


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log("Failed to fetch data from Quicksell API");
      });
  }, []);

  return (
    <div className="App">
      <Header data={data}/>
    </div>
  );
}

export default App;
