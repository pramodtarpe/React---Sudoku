import { useContext } from "react";
import { AppContext } from "../../store/app-context";
import Item from "./Item";
import './Row.css';

const Row = (props) => {
    // const ctx = useContext(AppContext);
    
    return (
        <div className="row-container">
            <Item key={(props.rowId*10) + 1} item={props.rowItem[0]} />
            <Item key={(props.rowId*10) + 2} item={props.rowItem[1]} />
            <Item key={(props.rowId*10) + 3} item={props.rowItem[2]} />
            <Item key={(props.rowId*10) + 4} item={props.rowItem[3]} />
            <Item key={(props.rowId*10) + 5} item={props.rowItem[4]} />
            <Item key={(props.rowId*10) + 6} item={props.rowItem[5]} />
            <Item key={(props.rowId*10) + 7} item={props.rowItem[6]} />
            <Item key={(props.rowId*10) + 8} item={props.rowItem[7]} />
            <Item key={(props.rowId*10) + 9} item={props.rowItem[8]} />
        </div>
    );
}

export default Row;
