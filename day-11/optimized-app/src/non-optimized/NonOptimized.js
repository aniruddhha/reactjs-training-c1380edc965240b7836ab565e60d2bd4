import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { useCharacter } from '../custom-hook/use-character-non-optimized'

export function NonOptimized() {

    const [cnt, setCnt] = useState(0)
    const [ cart, setCart ] = useState(0) 

    //https://hp-api.herokuapp.com/api/characters
    //https://acnhapi.com/v1/houseware/
    const { characters } = useCharacter('https://hp-api.herokuapp.com/api/characters')
    
    const onClk = () => setCnt( c => c + 1  )
    const addPosterToCart = useCallback(() => setCart( cr => cr + 1 ), [characters])

    const findContains = useMemo( () => characters.map( ch => ch['name'].includes('a'))[0], [characters])

    return(
        <div className='container'>
            <div className='row'>
                <input type='button' value='Rerender' onClick={onClk}/>
            </div>
            <div className='row'>
             Total Sell Price {findContains}
            </div>
            <div>
                <div className='row'>
                    <MemoiaedList characters={characters} addPosterToCart={addPosterToCart}/>
                </div>
            </div>
        </div>
    )
}

const MemoiaedList = React.memo(function CharacterList({ characters , addPosterToCart}) {
    useEffect( () => {
        console.count('From Huge List')
    })
    return characters.map(
        (chr, inx) => (
            <Character key={inx} {...chr} addPosterToCart={addPosterToCart}/>
        ) 
    )
})

function Character({ name, image, dob, addPosterToCart }) {
    useEffect( () => {
        console.count('From Character Item')
    })

    return (
        <div className="card m-3" style={{ width: '18rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{dob}</p>
                <input type='button' className="btn btn-primary" value='Buy Poster' onClick={addPosterToCart}/>
            </div>
        </div>
    )
}

