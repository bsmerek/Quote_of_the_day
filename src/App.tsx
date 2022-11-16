import { useState } from "react";
import "./App.css";
import { getQuote } from "./components/getFunction";
import randomColor from "./components/randomColour";

function App() {
  const [quote, setQuote] = useState(
    "Genius is one percent inspiration and ninety-nine percent perspiration."
  );

  const clickHandler = async (event: any) => {
    event.preventDefault();
    const constantStreamOfQuote = await getQuote(quote);
    const quoteOfTheDay =
      constantStreamOfQuote[
        Math.floor(Math.random() * constantStreamOfQuote.length)
      ].text;
    setQuote(quoteOfTheDay);

    const makeColour = randomColor();
    document.body.style.backgroundColor = makeColour;
    document.querySelector("textarea")!.style.backgroundColor = makeColour;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the day</h1>
        <textarea className="quote" value={quote} readOnly></textarea>
        <button
          className="button"
          data-testid="newQuote"
          onClick={clickHandler}
        >
          Click for a quote
        </button>
      </header>
    </div>
  );
}

export default App;
