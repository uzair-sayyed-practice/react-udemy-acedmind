import { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraph}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
