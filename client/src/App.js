import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([2,2]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `/sum?x=${numbers[0]}&y=${numbers[1]}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData();
  }, [numbers]);

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <p>
          <input value={numbers[0]} onInput={(e)=>setNumbers([e.target.value, numbers[1]])} key={0} />
          +
          <input value={numbers[1]} onInput={(e)=>setNumbers([numbers[0],e.target.value])} key={1} />
          =
          <strong>{data && data.result}</strong>!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
