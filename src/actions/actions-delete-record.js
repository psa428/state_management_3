export const deleteRecord = (id) => {
        
    if (!id)
        return;
    
    return (dispatch) => {
        return  fetchDeleteRecord(id).then( (id) => {
            dispatch({
                type:   'REFRESH_AFTER_DELETE',
                payload: id    
            });
        } );   
        
        };
};

export async function fetchDeleteRecord(id) {
    return fetch('http://localhost:3005/records/' + id, {
        method: 'DELETE',
    })
     .then((rawResponse) => rawResponse.json())
    
};
