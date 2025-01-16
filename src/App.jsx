import React, { useState } from "react";
import DerivedState from "./DerivedState";
import ToggleSwitch from "./toggleSwicth/ToggleSwitch";
import Todo from "./Todo/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DerivedState /> */}
      {/* <ToggleSwitch/> */}
      <Todo/>
    </>
  );
}

export default App;
