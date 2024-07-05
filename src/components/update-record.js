import { Component  } from "react";
import { updateRecord} from '../actions/actions-update_record';
import { connect } from "react-redux";
// import { useSelector } from "react-redux";
// import { store } from "../store";

// import { useDispatch } from "react-redux";

class UpdateRecordContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title: props.curRec.title,
            completed:  props.curRec.completed,
            id:     props.curRec.id
        };
    };

    setTitle = (val) => {
        this.setState({
          ...this.state,
          title: val
        })
      };

    setStat = (val) => {
        this.setState({
            ...this.state,
            completed: val
        }); 
    };
    
    requestUpdateRecord = () => {
        // Добавление записи
        
        this.props.dispatch(updateRecord(this.state.id, this.state.title, this.state.completed));     
    
    };

    render (){
    return (
        <div className='update-record' hidden={!this.props.isUpdating}>
            <input 
            value={this.state.title}
            onChange={event => this.setTitle(event.target.value)}
            type="text" 
            />

            <input 
            value={this.state.completed}
            onChange={event => this.setStat(event.target.value)}
            type="text" 
            />  

            <button
            //   disabled={props.isCreating}
            onClick={() => {this.requestUpdateRecord()}}
                >Сохранить
            </button>  
        </div>
    ); 
    };   
};

const mapStateToProps = (state) => ({ isUpdating: state.initState.isUpdating, curRec: state.initState.curRec});

export const UpdateRecord = connect(mapStateToProps)(UpdateRecordContainer);