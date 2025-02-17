import { Component } from "react";

import { connect} from 'react-redux';
import { getData } from "../actions/actions-get-data";
import { deleteRecord } from "../actions/actions-delete-record";

import { Search } from "./search";
import { AddRecord } from "./add-record";
import { UpdateRecord } from "./update-record";

import { updateRecord } from "../actions/actions-update_record";
export class MainPageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // records:  [],
      strSearch: '',
      isLoading: false,
      
            
    };
  };

    setStr = (val) => {
      
      this.setState ({ 
        ...this.state,
        strSearch: val
      });
    };

    componentDidMount() {
      //  Первоначальная загрузка записей

      this.props.dispatch(getData());
         
    }
  
    requestSortRecords = () => {
      let arr = [...this.props.records];
      
      arr.sort(function(a, b) {
        
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      });
        this.props.dispatch({
          type: 'SORT_RECORDS',
          payload:  arr
        })
    };

    requestDeleteRecord = (id) => {
      // Удаление записи
      this.props.dispatch(deleteRecord(id))  ;
  
    }

    requestUpdateRecord = (id, title, stat, dispatch) => {
      
      // Обновление записи
      updateRecord(id, title, stat, dispatch);
  
    }

    render() {
      return (
          <div className="text-center">
            {/* <Search strSearch={strSearch} setStrSearch={setStrSearch}/> */}
            <Search strSearch={this.state.strSearch} setStr={this.setStr}/>
            <AddRecord /> 

        <div className="text-center">     
          <button 
            className="border-2 m-4 border-blue-200 rounded-md w-36 bg-blue-100"
            onClick={this.requestSortRecords}>
                    Сортировка
          </button>    
            </div> 
           { this.props.isUpdating ? (<UpdateRecord   /> ): (<></>) }
  

          <h1 className="text-2xl text-gray-500 font-bold from-indigo-700">To Do List</h1>
        <div className="container w-120 m-auto text-center" >
            <table className="border-separate border border-spacing-1 m-auto">
              <tr>
                
                  {/* <th scope='col'>id</th>  */}
               
                  <th className="border border-spacing-1" scope='col'>Title</th>
                  <th scope='col'>Completed</th>
              </tr>
          
             { this.state.isLoading ? (
                    <div className="loader">Load...</div>
                ) : (   
                  
                  this.props.records.map(({ id, title, completed }) => (
                      
                       <tr style= {title.indexOf(this.state.strSearch) >= 0 && this.state.strSearch !== '' ? {backgroundColor: "yellow"} : {backgroundColor: "#efefef"}}>                    
                        
                           <td>{title}</td>  
                           <td>{completed}</td>
                          <button className="border-2 border-gray-300 rounded-md w-20 bg-blue-100"
                          // disabled={isDeleting} 
                          onClick={() => {this.requestDeleteRecord(id)}}>
                                  Удалить
                        </button>
                        <button className="border-2 border-gray-300 rounded-md w-20 bg-blue-100"
                          // disabled={isUpdating}
                          onClick={() => { 
                              this.props.dispatch({type: 'UPDATE_RECORD',
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
};

const mapStateToProps = (state) => ({ records: state.initState.records, isUpdating: state.initState.isUpdating});

export const MainPage =  connect(mapStateToProps)(MainPageContainer);
