import { useReducer, useState } from 'react'
import './App.css'
import { useRef } from 'react'
let initialValue =[
   {
  value : 'Type here ',
  visible : true
}
]
function reduce(int,action){
  switch (action.type) {
    case "ADD":
      return [...int,{value:action.data , visible: true }]
    case "CHANGE":
      return int.map((item,index)=>{
        if (action.index == index){
          return {...item, visible : !item.visible}
        }else{
          return item
        }
      })
    default:
      return int;
  }
}
function App() {
 const [state,dispatch] = useReducer(reduce,initialValue)
  const [value,setValue] = useState('')
  const reference = useRef()
  function ChangeInput(e){
    setValue(e.target.value)
    
  }

  function HandelAdd(){
    dispatch({type: 'ADD', data: value})
  }

  function handelHide(index){
    dispatch({type: 'CHANGE', index})
    
  }

  function PutFocus(){
    reference.current.focus()
  }
  return (
    <>
    <input type="text" onChange={(e)=>ChangeInput(e)} ref={reference} />
    <button onClick={HandelAdd}>ADD</button>
      {state.map((item,index)=>{
        return(
          <div key={index} className='div'>
            <h1>{(item.visible)? item.value : 'The Content is hidden'}</h1>
            <button onClick={()=>handelHide(index)}>Toggle</button>
          </div>
        )
      })}
      <br />
      <button onClick={PutFocus}>GET BACK WRITING</button>
    </>
  )
}

export default App







