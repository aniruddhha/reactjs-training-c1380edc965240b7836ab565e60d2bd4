

export default function ChildProp(props) {
    console.log(props)
    return (
        <>
            <h1>
                This is from Component
            </h1>
            {props.children}
        </>
    )
}

export function Abc({ name }) {
    return (
        <>
            <h1> I am from Abc {name}</h1>
        </>
    )
}


