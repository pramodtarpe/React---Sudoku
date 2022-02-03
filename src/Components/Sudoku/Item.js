import React, { useContext } from 'react';
import { AppContext } from '../../store/app-context';
import './Item.css';

const Item = (props) => {
    const ctx = useContext(AppContext);
    let rowIndex = parseInt(props.item.id/10) - 1;
    let colIndex = parseInt(props.item.id%10) - 1;

    const onChangeHandler = (event) => {
        event.preventDefault();
        if(event.target.value <=9){
            ctx.onUpdate({
                rowIndex:rowIndex,
                colIndex:colIndex,
                value:+event.target.value
            });
        }
    }
    const onClickHandler = () => {
        ctx.onClick({
            rowIndex:rowIndex,
            colIndex:colIndex
        });
    }

    return (    
        <React.Fragment>
            <div className="item-container">
                {
                (!props.item.isEditable) ? 
                    props.item.value 
                    : 
                    <input className='item-input' 
                        value={(props.item.value) ? props.item.value : ''} 
                        onChange={onChangeHandler}
                        onClick={onClickHandler}
                    />                    
                }
            </div>
        </React.Fragment>
    );
}

export default Item;