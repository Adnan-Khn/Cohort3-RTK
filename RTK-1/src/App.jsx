import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count)
  return (
    <div>
      <span onClick={()=>dispatch(decrement())}>➖</span>
      <h1>{count}</h1>
      <span onClick={()=>dispatch(increment())}>➕</span>
    </div>
  )
}

export default App