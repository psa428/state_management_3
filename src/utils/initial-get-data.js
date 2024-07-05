export const fetchData = () => {    
    
     fetch('http://localhost:3005/records')
                .then((loadedData) => loadedData.json())
                .then((loadedRecords) => {
                     return loadedRecords;
                });

                       
    };