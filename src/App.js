import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter} from 'react-router-dom';
import Content from "./components/Content/Content";


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Content/>
      </BrowserRouter>
  )
}

export default App;
