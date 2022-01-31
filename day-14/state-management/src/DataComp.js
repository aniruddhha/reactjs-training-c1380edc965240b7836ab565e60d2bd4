import { useContext } from "react"
import { DataContext } from "./App"

export function Abc() {

    const { state, dispatch } = useContext(DataContext)

    return (
        <>
            <h3> Abc Component : Parent { state.data }</h3>  
            <div>
                <input type='button' value='Okay' onClick={ () => dispatch({ type : 'abc' }) } />
            </div>
            <hr/>
        </>
    )
}

export function Pqr() {

    const { state, dispatch } = useContext(DataContext)

    return (
        <>
            <h3> Pqr Component : Parent {state.data}</h3>  
            <div>
                <input type='button' value='Okay' onClick={ () => dispatch({ type : 'pqr' }) }/>
            </div>
            <hr/>
            <div>
                <Cde />
            </div>
        </>
    )
}

function Cde() {

    const { state, dispatch } = useContext(DataContext)

    return (
        <>
            <h3> Cde Component : Child {state.data}</h3>  
            <div>
                <input type='button' value='Okay' onClick={ () => dispatch({ type : 'cde' }) }/>
            </div>
            <hr/>
            <div>
                <Fgh/>
            </div>
        </>
    )
}

function Fgh() {
    const { state, dispatch } = useContext(DataContext)
    return(
        <>
            <h3> Fgh Component : Child {state.data}</h3>  
            <div>
                <input type='button' value='Okay' onClick={ () => dispatch({ type : 'fgh' }) }/>
            </div>
            <hr/>
        </>
    )
}

export function Lmn() {
    const { state, dispatch } = useContext(DataContext)

    return(
        <>
            <h3> Lmn Component : Parent {state.data}</h3>  
            <div>
                <input type='button' value='Okay' onClick={ () => dispatch({ type : 'lmn' }) }/>
            </div>
            <hr/>
            <div>
                <Ikj/>
            </div>
        </>
    )
}

function Ikj() {
    return(
        <>
            <h3> Ijk Component : Child </h3>  
            <div>
                <input type='button' value='Okay' />
            </div>
            <hr/>
        </>
    )
}



