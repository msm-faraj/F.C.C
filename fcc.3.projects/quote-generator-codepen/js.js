import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const quoteData = [
  {text: "a", author: "1"},
  {text: "b", author: "2"},
  {text: "c", author: "3"},
  {text: "d", author: "4"},
  {text: "e", author: "5"},
  {text: "f", author: "6"},
];

const QuoteBox = ({quote, handleNewQuote}) => (
<div id="quote-box">
  <p id="text">{quote.text}</p>
  <h2 id="author">{quote.author}</h2>
  <div class="actions">
    <button
      id="new-quote"
      class="button"
      onClick={handleNewQuote}
      >
      New Quot
    </button>
    <a
      href="https://twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      >
      Tweet
    </a>
  </div>
</div>
);

const getRandomIndex = () =>
  Math.round(Math.random() * ((quoteData.length-1) -0) +0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  return (
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))
