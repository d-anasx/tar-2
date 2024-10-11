import React, { useState, useEffect } from 'react';

const CovidDataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">COVID-19 Cases by Country</h2>
      <ul className="bg-white shadow-md rounded-lg divide-y">
        {data.map((country) => (
          <li key={country.country} className="p-4 hover:bg-gray-50">
            <span className="font-semibold">{country.country}:</span> {country.cases} cases
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CovidDataDisplay;