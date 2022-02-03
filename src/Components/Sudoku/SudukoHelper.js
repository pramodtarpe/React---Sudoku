import React, { useContext } from 'react';
import { AppContext } from '../../store/app-context';
import './SudokuHelper.css';

export default function SudukoHelper() {
  const ctx = useContext(AppContext);
  const visited = ctx.visited;

  let renderItem = []
  if(visited){
    for(let i=1;i<10;i++){
      renderItem.push(
        <div key={i} className={(!visited[i]) ? 'green':'gray'}>{i}</div>
      )
    }
  }
  return (
<   div className='helper-container'>
       {renderItem}
    </div>
  );
}
