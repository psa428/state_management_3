//  Начальное состояние
export const initialToDoState = {};
export const reducerEdit = (state=initialToDoState, action) => {

       
      const { type, payload } = action;
   
    //  Формирование нового state
  
    switch (type) {
      case 'DO_SOMETHING':{
        
        return state;
        
      }

     
    default: {
       
       
        return state;  
    
    }
  }
};  