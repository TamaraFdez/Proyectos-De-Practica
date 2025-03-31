import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { type State } from './types.d'
import { type Action } from './types.d'

const initialState: State = {
  fromLanguaje: 'auto',
  toLanguaje: 'en',
  fromText: '',
  result:'',
  loading: false
}

function reducer(state: State , action: Action ) {
const { type} = action

if(type === 'INTERCHANGE_LANGUAGES') {
  return {
    ...state,
    fromLanguaje: state.toLanguaje,
    toLanguaje: state.fromLanguaje
  }
}
if(type === 'SET_FROM_LANGUAGE') {
  return {
    ...state,
    fromLanguaje: action.payload
  }
}
if(type === 'SET_TO_LANGUAGE') {
  return {
    ...state,
    toLanguaje: action.payload
  }
}
if(type === 'SET_FROM_TEXT') {
  return {
    ...state,
    loading: true,
    fromText: action.payload,
    result: ''
  }
}
if(type === 'SET_RESULT') {
  return {
    ...state,
    loading: false,
    result: action.payload
  }

}
}
function App() {
  const [{
    fromLanguaje,
    toLanguaje,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)
    
  console.log({ fromLanguaje })
  return (  
    <>
      <div className='App'>
        <h1>Google translate</h1>
        <button onClick={()=>{
          dispatch({type: 'SET_FROM_LANGUAGE', payload: 'es'})
        }}>Cambiar a español</button>
        {fromLanguaje}
      </div>
    </>
  )
}

export default App
