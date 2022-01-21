import { useState } from 'react'
import { Mobile } from './mobile/mobile'
import { MobileContainer } from './mobile/mobile-container'

function App() {

  const [show, setShow] = useState(false)
  const [bat, setBat] = useState('')

  const toggle = () => setShow(show => !show)

  const onChangeBat = () => setBat(new Date().toString())
  return (
    <>
      <div>

        {show && <Mobile battery={bat} />}
      </div>
      <div>
        <input type='button' value='Load/Unload' onClick={toggle} />
        <input type='button' value='Battery' onClick={onChangeBat} />
      </div>
    </>
  );
}

export default App;
