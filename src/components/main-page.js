
import { useDispatch } from "react-redux";
import { useState } from "react";

import { Search } from "./search";
import { AddRecord } from "./add-record";
import { UpdateRecord } from "./update-record";
import { useSelector } from "react-redux";
import { deleteRecord} from '../utils/delete-record';
import { updateRecord } from "../utils/update-record";



export function MainPage (){

  const dispatch = useDispatch();
  const isUpdating = useSelector((state) => state.initState.isUpdating);
;    
    let records = useSelector((state) => state.initState.records);
    let isLoading = false;

     const [strSearch, setStrSearch] = useState('');
    
    // const [idRec, setIdRec] = useState('');
    const requestSortRecords = () => {
      let arr = [...records];
      arr.sort(function(a, b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      });
      
      // setRecords(arr);

    };

    const requestDeleteRecord = (id, dispatch) => {
      // Удаление записи
      deleteRecord(id, dispatch)  
  
    }

    const requestUpdateRecord = (id, title, stat, dispatch) => {
      
      // Обновление записи
      updateRecord(id, title, stat, dispatch);
  
    }

    return (
        <div className="App">
          <Search strSearch={strSearch} setStrSearch={setStrSearch}/>
          <AddRecord /> 

      <div className="button-panel">     
        <button 
          onClick={requestSortRecords}>
                  Сортировка
        </button>   
      </div>  
         { isUpdating ? (<UpdateRecord   /> ): (<></>)
}

        <h1>To Do List</h1>
        
      <div className='table-panel' >
          <table>
            <tr>
              
                {/* <th scope='col'>id</th> */}
                <th scope='col'>Title</th>
                {/* <th scope='col'>Completed</th> */}
            </tr>
        
          {isLoading ? (
                  <div className="loader">Load...</div>
              ) : (
                
                  records.map(({ id, title, completed }) => (
                    
                     <tr style= {title.indexOf(strSearch) >= 0 && strSearch !== '' ? {backgroundColor: "yellow"} : {backgroundColor: "#efefef"}}>                    
                       
                      <td>{title}</td>  
                      <button 
                        // disabled={isDeleting} 
                        onClick={() => {requestDeleteRecord(id, dispatch)}}>
                                Удалить
                      </button>
                      <button
                        // disabled={isUpdating}
                         onClick={() => { 
                            dispatch({type: 'UPDATE_RECORD',
                                      payload: {
                                        id:  id,
                                        title:  title,
                                        completed:  completed
                                      }
                            });
                            // requestUpdateRecord((id, title, completed, dispatch));
                        }  
                        }   
                        >
                        Изменить
                      </button> 
                      
                    </tr>   
                  ))
              )}
          </table>    
      </div>
      
      </div>
    )      
}