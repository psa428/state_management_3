//  Загрузка данных в состояние
export const getData = () => {
    
    return (dispatch) => {
        return fetchData().then ((loadedRecords) => {
            
            dispatch({
                type: 'LOAD_DATA',
                payload: loadedRecords
            })
        })
    }
};    

export const fetchData = () => {
    
    return fetch('http://localhost:3005/records')
                .then((loadedData) => loadedData.json())
                .then((loadedRecords) => {
                   
                     return loadedRecords;
                })
                
    };
    

