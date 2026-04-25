import Style from "./App.module.css";
import Display from "./components.jsx/display.jsx";
import Button from "./components.jsx/Button.jsx";
import { useState } from "react";
function App() {
  let [calval,setcalval] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalval("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calval);
        setcalval(result.toString());
      } catch (err) {
        setcalval("Error");
      }
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };

  return (
    <div className={Style.container}>
      <Display displayvalue={calval}></Display>
      <Button onButtonclicked={onButtonClick}></Button>
    </div>
  );
}
export default App;
