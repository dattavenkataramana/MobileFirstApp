import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  

const DisplayItems = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
      setJokes(response.data.jokes);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch jokes');
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Jokes</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <table className="table table-striped table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th style={{color:"blue"}}>ID</th>
              <th style={{color:"pink"}}>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <td style={{color:"blue"}}>{index + 1}</td>
                <td style={{color:"orange"}}>{joke.joke}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayItems;
 