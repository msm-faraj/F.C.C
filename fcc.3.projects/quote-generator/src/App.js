import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // "https://api.quotable.io/random"
  const [quote, setQuoteState] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteState({
          text: data.content,
          authore: data.author,
        });
      });
  };

  return (
    <div className="App">
      <div
        id="quote-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p id="text">{quote.text}</p>
        <p id="author">{quote.authore}</p>
        <button id="new-quote" onClick={getQuote}>
          New Qoute
        </button>
        <a href={"https://twitter.com/intent/tweet"} id="tweet-quote">
          twitte it
        </a>
      </div>
    </div>
  );
}

export default App;
