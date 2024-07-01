import './App.css';
import { MainPage } from './components/main-page';
// import { AppContext } from './context';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from './actions/actions-get-data';
// import { store } from './store';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  
  // const [title, setTitle] = useState("");
  // const [refreshRecords, setRefreshRecords] = useState(false);
  // const [ isUpdating, setIsUpdating] = useState(false);
  // const [stat, setStat] = useState(false) ;

  // const refreshRec = () => setRefreshRecords(!refreshRecords);

  const chkReducer = () => {
    console.log(`in chkReducer}`);

    dispatch(getData());
  };
  dispatch(getData());
    return (
      
      <div>
        
           <MainPage /> 
        <button onClick={() => {
          console.log('Нажали на кнопку Проверить reducer ')
          chkReducer()
          
         }}>Проверим reducer</button>

      </div>
     
      

    )
}

export default App;
