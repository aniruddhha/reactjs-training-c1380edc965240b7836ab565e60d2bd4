import { useState, useEffect } from 'react'

export function Car({ model }) {

    const [wd, setWd] = useState(window.innerWidth)
    const [vl, setVl] = useState(true)

    useEffect(() => {
        console.log('hello this is log')
        document.title = 'This title' // side effect

        const windowChangeListener = () => setWd(window.innerWidth)

        window.addEventListener('resize', windowChangeListener ) // side effect

        return () => {
            console.log('cleaning up')
            window.removeEventListener('resize',windowChangeListener) // clean up
        }
    })

    useEffect( () => {
        console.log('Second Effect Called')
    }, []) // because of this [], it will call on first render only

    useEffect( () => {
        console.log('Third Effect Called')
    }, [vl])

    return(
        <>
            <h1>At Present Width : {wd}</h1>
            <div>
                <input type='button' value={'Okay'} onClick={ () => setVl( pvl => !pvl )  }/>
            </div>
        </>
    )
}