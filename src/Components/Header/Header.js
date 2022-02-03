import React, { useContext, useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { AppContext } from '../../store/app-context';
import './Header.css';

let SUDOKU = {sudoku: [],solution: []};
const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
const encodeParams = (params) => Object.keys(params).map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`).join('&');

export default function Header() {
    const ctx = useContext(AppContext);
    const [difficulty, setDifficulty] = useState('easy');

    function generateClickHandler(){
        fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          // setSudoku(data.board);
          SUDOKU = {...SUDOKU, sudoku:data.board}
    
          const board = {board:data.board}
          fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: encodeParams(board),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
            .then(response => response.json())
            .then(data => {
              // setSolved(response.solution);    
              SUDOKU = {...SUDOKU, solution:data.solution}
              ctx.onGenerate(SUDOKU);
            })
            .catch(console.warn)
        })
        .catch(err => {
          console.error(err);
        });
    }
    const selectChangeHandler = (event) => {
        setDifficulty(event.target.value);    
    }

    return (
        <Card className='header-container'>
            <Button onClick={generateClickHandler} name="Generate" />
            <select className='header-selector' onChange={selectChangeHandler}>
                <option value="easy"> Easy</option>
                <option value="medium"> Medium</option>
                <option value="hard"> Hard</option>
            </select>
        </Card>
    );
}
