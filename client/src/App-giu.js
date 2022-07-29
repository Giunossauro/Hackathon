import { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([2,2]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  (async () => {
      try {
        // aqui vem o axios no lugar do fetch, embora o fetch ja funciona
        const response = await fetch(
          `http://localhost:3001/cursos`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        console.log(actualData.result)
        setData(actualData.result);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    })();
  }, [numbers]); 

  return ( 
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
        {data.map(i => <li>{i.nome}</li>)}
        </ul>
        <p>
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