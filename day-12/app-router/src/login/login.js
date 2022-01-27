import { useParams, useNavigate } from "react-router-dom";

export function Login() {

    const nav = useNavigate()
    const onLogin = () => nav('/home/123')

    return(
        <>
            <h1> Login Component </h1>
            <div>
                <input type='button' value='Login' onClick={onLogin}/>
            </div>
        </>
    )
}