import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import TopSegment from "./components/TopSegment/TopSegment";
import Product from "./components/ProductSegment/Product";

function App() {
  return (
    <>
      <NavigationBar />
      <TopSegment />
      <Product />
    </>
  );
}

export default App;
