import React, { useState } from "react";
import { Home } from "./pages/Home";
import DrawChart from "./Chart/DrawChart";
import { DrawChart3 } from "./Chart/DrawChart3";

function App() {
  const [Data, setData] = useState([]);
  function getSortedData(data: any) {
    console.log(`The sorted Data is data is ${JSON.stringify(data)}`);
    console.log(`The length is: ${data.length}`);

    setData(data);
    // console.log(`The sorted Data is: ${Data}`);
  }

  return (
    <div>
      <Home onSubmission={getSortedData}></Home>
      {/* <div>{Data.length > 0 && <DrawChart result={Data}></DrawChart>}</div> */}

      <div>{Data.length > 0 && <DrawChart3 result={Data}></DrawChart3>}</div>
    </div>
  );
}

export default App;
