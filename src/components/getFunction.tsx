import axios from "axios";

const getQuote = async () => {
  try {
    const quote = await axios.get("https://type.fit/api/quotes");
    const randomQuote =
      quote.data[Math.floor(Math.random() * quote.data.length)];
    return randomQuote.text;
  } catch (error) {
    console.log(error);
  }
};

export default getQuote;
