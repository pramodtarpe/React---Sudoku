import React, { useContext } from 'react';
import { AppContext } from '../../store/app-context';
import Row from './Row';
import DummySudoku from '../UI/DummySudoku/DummySudoku';
import Footer from '../Footer/Footer';
import './Sudoku.css';
import SudukoHelper from './SudukoHelper';

const Sudoku = (props) => {
    const ctx = useContext(AppContext);

    let renderItem;
    if(ctx.sudoku){
        renderItem = (
            <React.Fragment>
                <div className="sudoku-container">
                    <Row rowId={1} rowItem={ctx.sudoku[0]} />
                    <Row rowId={2} rowItem={ctx.sudoku[1]} />
                    <Row rowId={3} rowItem={ctx.sudoku[2]} />
                    <Row rowId={4} rowItem={ctx.sudoku[3]} />
                    <Row rowId={5} rowItem={ctx.sudoku[4]} />
                    <Row rowId={6} rowItem={ctx.sudoku[5]} />
                    <Row rowId={7} rowItem={ctx.sudoku[6]} />
                    <Row rowId={8} rowItem={ctx.sudoku[7]} />
                    <Row rowId={9} rowItem={ctx.sudoku[8]} />
                </div>
                <SudukoHelper />
                <Footer />
            </React.Fragment>
        )
    }
    else{
        renderItem = <DummySudoku />    
    }

    return renderItem;
}

export default Sudoku;