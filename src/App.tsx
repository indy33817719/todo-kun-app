import React from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { countAction } from 'actions/countActions'
import { useSelector } from 'react-redux'
import { RootState } from 'stores/reducers'

function App() {
  const countValue = useSelector((state: RootState) => state.count.value)
  const dispatch = useDispatch()
  const clickHandler = () => {
    console.log('clicked!')
    dispatch({ type: (countAction.increment)})
  }

  return (
    <div className="App">
      <div>{ countValue }</div>
      <button onClick={() => clickHandler()}>+1</button>
    </div>
  ); 
}

export default App;
