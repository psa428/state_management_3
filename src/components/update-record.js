import { useState } from "react";
import { updateRecord} from '../utils/update-record'
import { useSelector } from "react-redux";
import { store } from "../store";
import { useDispatch } from "react-redux";

export function UpdateRecord(props) {
    
    const dispatch = useDispatch();
    const id = useSelector((state) => state.initState.curRec.id);
    
    let ttl= useSelector((state) => state.initState.curRec.title);
    
    const completed = useSelector((state) => state.initState.curRec.completed);
    let isUpdating = useSelector((state)  => state.initState.isUpdating);

     const [title, setTitle] = useState(ttl) ;
     const [stat, setStat] = useState(completed);
    
    return (
        <div className='update-record' hidden={!isUpdating}>
            <input 
            value={title}
            onChange={event => setTitle(event.target.value)}
            type="text" 
            />

            <input 
            value={stat}
            onChange={event => setStat(event.target.value)}
            type="text" 
            />  

            <button
            //   disabled={props.isCreating}
            onClick={() => {updateRecord(id, title, stat, dispatch)}}
                >Сохранить
            </button>  
        </div>
    );    
}