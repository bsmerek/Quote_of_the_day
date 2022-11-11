const randomColour = () => {
  const x = Math.floor(Math.random() * 256);
  const y = 100 + Math.floor(Math.random() * 255);
  const z = 50 + Math.floor(Math.random() * 255);
  //const opacity = Math.floor(Math.random() * 10) / 10;
  return `rgb(${x},${y},${z}`;
};

export default randomColour;
