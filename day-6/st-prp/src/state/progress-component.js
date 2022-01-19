import { useState } from "react"

export default function Progress({ max = 10 }) {

    const st = useState(10)

    const onNegClkd = () => st[1](st[0] - 2)
    const onPosClkd = () => st[1](st[0] + 2)

    return (
        < main >
            <div>
                <input type='button' value='-' onClick={onNegClkd} />
                <progress value={st[0]} max={max}> 32% </progress>
                <input type='button' value='+' onClick={onPosClkd} />
            </div>
        </main >
    )
}