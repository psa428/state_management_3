import { getData } from "../actions/actions-get-data"; 

export const updateRecord = (id, title, stat, dispatch) => {
         
    if (!id)
      return;
     
    let newTitle = title;
    let newStat = stat;
    // setIsUpdating(true);

    fetch('http://localhost:3005/records/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
            title: newTitle,
            completed: newStat,
        }),
    })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            // dispatch(getData);
            dispatch({type: 'REFRESH_AFTER_UPDATE',
                    payload:    {
                        id: id,
                        title: newTitle,
                        completed:  newStat
                    }
            });    
            
        });
      
};