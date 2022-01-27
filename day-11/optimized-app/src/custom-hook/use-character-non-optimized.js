import { useEffect, useState, useCallback } from "react"

export function useCharacter(url) {

    const controller = new AbortController()
    const [pulling, setPulling] = useState(false)
    const [characters, setCharacters] = useState([])

    const fetchCharacters = useCallback(async () => {
        setPulling(true)
        const response = await fetch(url, { signal : controller.signal })
        const chars = await response.json()

        setCharacters(chars)
        setPulling(false)

        setTimeout( () => controller.abort(), 1500  )
    })

    useEffect( () => {
        console.log(`calling`)
        fetchCharacters()
    },[url])

    return { pulling, characters }
}