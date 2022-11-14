import { useState } from "react";
import "./App.css";
import getQuote from "./components/getFunction";
import randomColor from "./components/randomColour";

function App() {
  const newQuote = async () => {
    const constantStreamOfQuote = await getQuote();
    setQuote(constantStreamOfQuote.text);
  };
  newQuote();

  const [quote, setQuote] = useState("Click button to get quote");
  const clickHandler = () => {
    getQuote().then((data) => {
      setQuote(data);
      const makeColour = randomColor();
      document.body.style.backgroundColor = makeColour;
      document.querySelector("textarea")!.style.backgroundColor = makeColour;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the day</h1>
        <p>
          <textarea className="quote" value={quote}></textarea>
        </p>
        <button className="button" onClick={clickHandler}>
          Click for a quote
        </button>
      </header>
    </div>
  );
}

export default App;
