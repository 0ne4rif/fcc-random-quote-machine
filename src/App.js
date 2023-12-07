import "./App.css";
import { useState } from "react";

const quotes = [
  {
    quote: "from the river to the sea, Palestine will be free",
    author: "Palestinian",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
];

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 5));
  };

  return (
    <div id="quote-box" className="center">
      <p id="text">"{quotes[randomNumber].quote}"</p>
      <p id="author">-{quotes[randomNumber].author}</p>
      <p className="footer">by Wan Arif</p>
      <button
        className="custom-btn"
        id="new-quote"
        onClick={generateRandomNumber}
      >
        New Quote
      </button>
      <button className="custom-btn right-btn">
        <a
          target="_top"
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
        >
          Tweet Quote
        </a>
      </button>
    </div>
  );
}

export default App;
