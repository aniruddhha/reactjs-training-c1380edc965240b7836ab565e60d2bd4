
import { Button } from 'react-bootstrap';

export const Basic1 = () => (
    <>
    </>
)

export function Basic({ backgroundColor, border }) {
    return (
        <section>
            <p style={{ backgroundColor }} > Hello World </p>
            <p style={{ border }}> React Components </p>
            <p className="alert alert-info m-5"> Html 5, Bootstrap 5 </p>
        </section>
    )
}

