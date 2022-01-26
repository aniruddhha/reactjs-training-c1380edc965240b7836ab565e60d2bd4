import { useState, useCallback, useMemo } from 'react'
export function Mobile() {

    const [st, setSt] = useState(false)
    const [dsp, setDsp] = useState(false)

    const switchOff = () => console.log(`switching off`) // this inline one

    const fetchContacts = useCallback(() => { // every fecth call will be wrapped in useCallback, websockets
        setTimeout ( () => setSt(true), 3500 )
    },[dsp, st])


    const cropImage = () => 'cropping image' 

    const expensiveJob = useMemo( () => cropImage(), [] ) // cropping image, zipping, extracting data from spreadsheet, creating pdf/spreadsheet from data,

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