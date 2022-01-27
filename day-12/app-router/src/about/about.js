import { Outlet, Link} from "react-router-dom";
export function About() {
    return(
        <>
            <div>
                <h1> About Component </h1>
            </div>
            <div>
                <Link to="service">Services</Link>
                <Link to="product">Products</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}