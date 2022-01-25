import { useState, useCallback } from 'react'
export function Mobile() {

    const [st, setSt] = useState(false)
    const [dsp, setDsp] = useState(false)

    const switchOff = () => console.log(`switching off`) // this inline one

    const fetchContacts = useCallback(() => {
        setTimeout ( () => setSt(true), 3500 )
    },[dsp, st])

    const changeSt = () => {
        setSt( pSt => !pSt )
        setDsp(pDsp => !pDsp)
    }
    
    return(
        <>
            <input type='button' value='Okay' onClick={ () => fetchContacts()   }/>

            {st && <h1> This H1 for shwoing data </h1>}

            <input type='button' value='Okay' onClick={ () =>  changeSt()  }/>
        </>
    )
}