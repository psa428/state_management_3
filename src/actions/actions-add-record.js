
export const addRecord = (title) => {
    
    let  newRecord = title;
    if (!newRecord) 
        return;
    

    return (dispatch) => {
        return fetchAddRecord(newRecord).then( (response) => {
            
            dispatch ({
                    type:   'ADD_RECORD',
                    payload: response 
                });    
        });
            
    };
};    

export async function fetchAddRecord (newRecord) {  
    
    return fetch('http://localhost:3005/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
            title: newRecord,
            completed: "false",
        }),
    })
    .then((rawResponse) => rawResponse.json())
    
};