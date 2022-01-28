import { useParams, useLocation } from "react-router-dom";

export function Home() {
    const params = useParams()

    const { state } = useLocation()
    const { hi } = state

    return(
        <>
            <h1> Home Component {params.userId} </h1>
            <h1> Name {hi} </h1>
        </>
    )
}