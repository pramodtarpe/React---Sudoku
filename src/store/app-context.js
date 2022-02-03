import React, { useReducer } from "react";
export const AppContext = React.createContext();

const initialState = {
    sudoku: null,
    visited: null
};

function reducer(state, action){
    if(action.type === "GENERATE"){
        let sudoku = [];
        let solution = [];
        for(let i=0;i<9;i++){
            let tempSudoku = [];
            let tempSolution = [];
            for(let j=0;j<9;j++){
                tempSudoku.push({
                    id: ((i+1)*10) + (j+1),
                    value : action.payload.sudoku[i][j],
                    answer : action.payload.solution[i][j],
                    visited : [], 
                    isEditable:(action.payload.sudoku[i][j] === 0) ? true : false,
                });
            }
            sudoku.push(tempSudoku);
            solution.push(tempSolution);
        }
        return {sudoku:sudoku, visited:null};
    }
    if(action.type === "UPDATE"){
        let sudoku = [...state.sudoku]
        let rowIndex = action.payload.rowIndex;
        let colIndex = action.payload.colIndex;
        sudoku[rowIndex][colIndex].value = action.payload.value;
        return {sudoku:sudoku, visited:state.visited}
    }
    if(action.type === "CLICK"){
        let sudoku = state.sudoku;
        let visited = Array(10);
        visited.fill(false);
        let rowIndex = action.payload.rowIndex;
        let colIndex = action.payload.colIndex;
        let rowFactor = (+parseInt(rowIndex/3))*3;
        let colFactor = (+parseInt(colIndex/3))*3;
        for(let i=0;i<9;i++){
            visited[sudoku[rowIndex][i].value] = true;
            visited[sudoku[i][colIndex].value] = true;
        }
        for(let i=rowFactor;i<rowFactor+3;i++){
            for(let j=colFactor;j<colFactor+3;j++){
                visited[sudoku[i][j].value] = true;
            }
        }
        return {sudoku:state.sudoku, visited:visited}
    }
    if(action.type === "VALIDATE"){
        // for(let i=0;i<9;i++){
        //     for(let j=0;j<9;j++){
        //         if(state.sudoku[i][j].value !== state.solution[i][j].value){
        //             return {sudoku:state.sudoku, solution:state.solution}
        //         }
        //     }
        // }
        return {sudoku:state.sudoku, solution:state.solution}
    }
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const generateHandler = (SUDOKU) => {
        dispatch({type:"GENERATE", payload:SUDOKU});
    }
    const updateHandler = (obj) => {
        dispatch({type:"UPDATE", payload:obj});
    }
    const clickHandler = (obj) => {
        dispatch({type:"CLICK", payload:obj});
    }
    const validateHandler = () => {
        dispatch({type:"VALIDATE"});
    }

    const contextValue = {
        sudoku:state.sudoku,
        visited:state.visited,
        onGenerate: generateHandler,
        onUpdate: updateHandler,
        onClick: clickHandler,
        onValidate: validateHandler
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;