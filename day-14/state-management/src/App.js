
import React, { useReducer } from 'react'
import { Abc, Pqr, Lmn } from './DataComp'

const initialState = {
  data: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'abc': {
      return { ...state, data : ++state.data }
    }
    case 'pqr': {
      return { data : --state.data }
    }
    case 'lmn': {
      return { data : state.data *=2 }
    }
    default : {
      return { data : state.data /= 2 }
    }
  }
}

export const DataContext = React.createContext()

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <DataContext.Provider value={{ state, dispatch } }>
        <Abc />
        <Pqr />
        <Lmn />
      </DataContext.Provider>
    </div>
  );
}

export default App;
