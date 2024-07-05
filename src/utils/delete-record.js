

export const deleteRecord = (id, dispatch) => {
        
    if (!id)
        return;
    

    fetch('http://localhost:3005/records/' + id, {
        method: 'DELETE',
    })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            
            dispatch({
                type:   'REFRESH_AFTER_DELETE',
                payload:  {
                    id: id
                }
            })
        })
        
};