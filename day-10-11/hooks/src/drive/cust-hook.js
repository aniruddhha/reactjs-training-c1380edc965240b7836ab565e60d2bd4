import { useEffect, useState } from 'react'

export function useDrive() {

    const [st, setSt] = useState()

    // useEffect(() => {})

    return [st, setSt]
}