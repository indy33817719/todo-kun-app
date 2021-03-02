import { useDispatch, useSelector } from 'react-redux'
import { addToDoActions } from 'actions/addToDoAction'
import { RootState } from 'stores/reducers'

export const useAddToDoHook = () => {
  const isOpenModal = useSelector((state: RootState) => state.addToDo.isOpen)
  const dispatch = useDispatch()

  const toggleAddToDoModal = (v: boolean) => {
    dispatch((addToDoActions.updateOpenAddToDo(v)))
  }

  return {
    addToDo: {
      updateOpen: toggleAddToDoModal,
      isOpen: isOpenModal,
    }
  }


}