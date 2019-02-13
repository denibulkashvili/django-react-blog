import React from "react";
import ReactDOM from "react-dom";
import DataProvider from './DataProvider';


const App = () => (
  <DataProvider />
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
