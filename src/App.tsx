import React, { useState } from "react";
import { Home } from "./pages/Home";
import DrawChart from "./Chart/DrawChart";

function App() {
  const [Data, setData] = useState([]);
  function getSortedData(data: any) {
    console.log(`The sorted Data is data is ${JSON.stringify(data)}`);

    setData(data);
    // console.log(`The sorted Data is: ${Data}`);
  }

  return (
    <div>
      <Home onSubmission={getSortedData}></Home>
      <div>{Data.length > 0 && <DrawChart result={Data}></DrawChart>}</div>
    </div>
  );
}

export default App;
