import { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import { useCallback } from "react";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggling, setAllowToggling] = useState(false);

  const toggleParagraph = useCallback(() => {
    if (allowToggling) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggling]);

  const allowTogglingHandler = () => {
    setAllowToggling(true);
  };

  console.log("APP RUNNING");

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraph}>Toggle Paragraph!</Button>
      <Button onClick={allowTogglingHandler}>Allow Toggling!</Button>
    </div>
  );
}

export default App;
