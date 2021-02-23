import React from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { countAction } from 'actions/countActions'
import { useSelector } from 'react-redux'
import { RootState } from 'stores/reducers'
import { ToDos } from 'components/ToDosComponent'
import { AddToDoButton } from 'components/AddToDoButtonComponent'

export const App: React.FC = () => {
  const countValue = useSelector((state: RootState) => state.count.value)
  const dispatch = useDispatch()
  const clickHandler = () => {
    console.log('clicked!')
    dispatch({ type: (countAction.increment)})
  }

  return (
    <div className="w-full h-full container mx-auto">
      <AddToDoButton></AddToDoButton>
      <ToDos></ToDos>
      {/* <div>{ countValue }</div>
      <button onClick={() => clickHandler()}>+1</button> */}
    </div>
  ); 
}
