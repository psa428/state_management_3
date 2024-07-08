export const updateRecord = (id, title, stat) => {
    
         
    if (!id)
      return;
     
    let newTitle = title;
    let newStat = stat
    
    return (dispatch) => {
        return  fetchUpdateRecord(id, newTitle, newStat).then( () => {


            dispatch({
                type: 'REFRESH_AFTER_UPDATE',
                payload: {  
                    title: newTitle,
                    completed:  newStat,
                    id: id
                }
            });    
        } );   
        
        };
};

export async function fetchUpdateRecord(id, newTitle, newStat) {
  
    return  fetch('http://localhost:3005/records/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    title: newTitle,
                    completed: newStat,
                }),
    })
        .then((rawResponse) => rawResponse.json())
        
      
};