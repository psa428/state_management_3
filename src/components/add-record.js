import { useSelector } from "react-redux";

import { useState } from "react";
import { addRecord } from "../utils/add-record";
import { useDispatch } from "react-redux";
import { getData } from "../actions/actions-get-data";


export function AddRecord() {
  const dispatch = useDispatch();
 
    const [title, setTitle] = useState('');

    const requestAddRecord = () => {
      // Добавление записи
      addRecord(title, dispatch)
      
  
    }
    
    // const { isCreating, requestAddRecord } = useRequestAddRecord(refreshRec, title);
    return (
        <div className='add-record'>
        <input 
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text" 
          placeholder='Введите наименование дела' />

        <button
          // disabled={isCreating}
           onClick={requestAddRecord}
            >Добавить
        </button>  
      </div>  
    )
}