import './App.css';
import { useState } from 'react'

function App({ hand }) {

  const [cnt, setCnt] = useState(0)
  const [st, setSt] = useState({ backgroundColor : 'white' })
  const [nm, setNm] = useState('')

  const onClk = () =>  {
    setCnt( pcnt => ++pcnt )
    setSt( { backgroundColor : 'red' })
  }

  return (
    <>
      <div>
        <h1 title='ttl' role='hd' data-testid='hdr' style={st}>{cnt}</h1>
      </div>
      <div>
        <input data-testid='btn' type='button' value='counter' onClick={onClk} />
      </div>
      <div>
        <input data-testid='btnOutTwo' type='button' value='OutTwo' onClick={hand} />
      </div>

      <div>
        <h1 data-testid='nm' title='nm'>{nm}</h1>
        <input data-testid='ip' type='text' value={nm} onChange={ e => setNm(e.target.value)} />
      </div>

    </>
  );
}

export default App;
