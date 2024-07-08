import { Component } from "react";

import { connect} from "react-redux";
import { addRecord } from "../actions/actions-add-record";


class AddRecordContainer extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        title: ''
    };
    
  };

  setTitle = (val) => {
    this.setState({
      ...this.state,
      title: val
    })
  }
  // const dispatch = useDispatch();
 
  //   const [title, setTitle] = useState('');

    requestAddRecord = () => {
      // Добавление записи
      
      this.props.dispatch(addRecord(this.state.title));     
  
    }
    
    render () {
      return (
          <div className='content-center'>
          <input 
            className="mr-4 w-60 auto text-center border-2"
            value={this.state.title}
            onChange={event => this.setTitle(event.target.value)}
            type="text" 
            placeholder='Введите наименование дела' />

          <button
            className="border-2 border-gray-300 rounded-md w-20 bg-blue-100"
            // disabled={isCreating}
            onClick={() => {
              
              this.requestAddRecord(this.props.dispatch)
            }
          }
              >Добавить
          </button>  
        </div>  
      )
    };  
};

export const AddRecord = connect()(AddRecordContainer);