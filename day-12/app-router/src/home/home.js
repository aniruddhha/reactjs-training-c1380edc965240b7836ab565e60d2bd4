import { useParams } from "react-router-dom";

export function Home(props) {
    const params = useParams()

    return(
        <>
            <h1> Home Component {params.userId} </h1>
            <h1> Name {props.location.state.userName} </h1>
        </>
    )
}