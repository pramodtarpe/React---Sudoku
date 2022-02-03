import React, { useContext } from "react";
import Card from './Components/UI/Card/Card'
import Sudoku from "./Components/Sudoku/Sudoku";
import Button from "./Components/UI/Button/Button";
import { AppContext } from "./store/app-context";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Sudoku />
    </div>
  );
}

export default App;