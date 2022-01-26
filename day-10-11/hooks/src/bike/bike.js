
import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useDrive } from '../drive/cust-hook'

// React.memo - props and state changes -> HOC
// useCallback - avoiding rendering of functions, it returns function
// useMemo - avoiding rendering of functions, it returns calculation value

export function BikeIndex() {
    const [cnt, setCnt] = useState(0)
    const dv = useDrive()

    useEffect(()=>{
        // useDrive()
    },[]) 
    const onClk = () =>  {
        setCnt (cn =>  ++cn ) 
        console.log(dv)

        // const [dt, setDt] = useState()
        // console.log(useDrive())
    }
    
    const performFetchCall = useCallback(() => 'fetching the data', [])
    const performHeavyJob = () => `reading and extracting data from spreadsheet`
    const optimizedJob = useMemo( () => performHeavyJob(), [])

    useEffect(() => performFetchCall())

    return(
        <>
            <MemoisedBike rotate={cnt} performFetchCall={performFetchCall}/>

            <div>
                <div>
                    <input type='button' value='Okay' onClick={onClk}/>
                </div>
            </div>
        </>
    )
}

const MemoisedBike = React.memo(function Bike( { rotate, performFetchCall } ) {

    useEffect(() => {
        console.count('In Bike ')
    })

    return(
        <>
            <h1> In Bike {rotate}</h1>
            <Wheel rotate={rotate}/>

            <input type='button' value='Fetch call' onClick={ () => performFetchCall() }/>
        </>
    )
})

function Wheel( { rotate } ) {

    useEffect( () => {
        console.count('In Wheel ')
    } )

    return(
        <>
        <h1> In Wheel </h1>
        { rotate }
        <Handle/>
          
        </>
    )
}

function Light() {

    useEffect( () =>{
        console.count('In Light ')
    } )

    return(
        <>
            <h1> In Light </h1>
        </>
    )
}

function Handle() {

    useEffect( () => {
        console.count('In Handle')
    } )

    return(
        <>
        <h1> In Handle</h1>
        <Light/>
        </>
    )
}