import { compose } from "redux";

 //Нчальное состояние
export const initialState = {
    "records":    [
      
    ],
    "isRefreshRecords":  false,
    "isUpdating":   false,
    "stat":    false,
    "curRec": {
      id: null,
      title:  null,
      completed:  false
    }
}; 

export const reducerBeg = (state=initialState, action) => {
       
      const { type, payload } = action;
    
    //  Формирование нового state
  
    switch (type) {
      case 'LOAD_DATA':{
        
        return {
          ...state,
          records: payload,
          isRefreshRecords:  false,
          isUpdating:   false,
          stat:    false,
          curRec: {
            id: null,
            title:  null,
            completed:  false
          }
        }   
      }
      case 'UPDATE_RECORD':{
        
        
        return {
          ...state,
          isUpdating: true,
          curRec: {
            id: payload.id,
            title:  payload.title,
            completed:  payload.completed
          }
        }
      }
      case 'REFRESH_AFTER_UPDATE':{
        let idx = state.records.findIndex(item => item.id === payload.id);
        let tmp = [];
        Object.assign(tmp, state.records);
        tmp[idx] = {
          id: payload.id,
          title:  payload.title,
          completed:  payload.completed
        }
        

        return {
          ...state,
          records: tmp,
          isUpdating: false
        }

      }
      case 'REFRESH_AFTER_DELETE':{
        let tmp = state.records.filter(item => item.id !== payload.id);

        return {
          ...state,
          records: tmp
        }

      }

     
    default: {
       
        return state;  
    
    }
  }
};  