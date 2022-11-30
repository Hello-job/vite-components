import React from "react";
import { VButton, WidgetInput } from "./components";
import { Input } from "antd";
import "antd/dist/reset.css";
function App() {
  return (
    <>
      <button onClick={() => console.log(">>>>>笑出强大")}>button</button>
      <VButton />
      <Input />
      <WidgetInput />
    </>
  );
}

export default App;
