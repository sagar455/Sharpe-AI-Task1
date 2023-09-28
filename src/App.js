import React, {  useState } from "react";
import "./App.css";
import Axios from "axios";
import Graph from "./Component/Graph";

const App = () => {
  const [coordinateData, setCoordinateData] = useState([]);
  const getData = () => {
    Axios.get("https://api.llama.fi/summary/fees/lyra?dataType=dailyFees").then(
      (response) => setCoordinateData(response.data.totalDataChart)
    );
  };

  return (
    <div className="App">
      <h1 className="heading">Sharpe AI Task 1</h1>
      <p className="content">The api provided has been only called when the user clicks on the button.As the user clicks on the button the api will be called and the data received will be saved in state called coordinateData and then this data is passed to the Graph component through props. In this project i have used Moment package to format the date and time and used Chart.js library to plot the graph </p>
      <div className="container">
      <button onClick={() => getData()}>Click To view the graph</button>
      <Graph coordinateData={coordinateData} />
      </div>
    </div>
  );
};

export default App;
