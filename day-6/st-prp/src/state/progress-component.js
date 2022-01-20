import { useState } from "react"

export default function Progress({ max = 10, incr = 2 }) {

    const [st, setSt] = useState(10)

    const onNegClkd = () => setSt(oldSt => oldSt - incr)
    const onPosClkd = () => setSt(st + incr)

    return (
        < main >
            <div>
                <input type='button' value='-' onClick={onNegClkd} />
                <progress value={st} max={max}> {st} </progress>
                <input type='button' value='+' onClick={onPosClkd} />
            </div>
        </main >
    )
}