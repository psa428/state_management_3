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
          <div className='add-record'>
          <input 
            value={this.state.title}
            onChange={event => this.setTitle(event.target.value)}
            type="text" 
            placeholder='Введите наименование дела' />

          <button
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