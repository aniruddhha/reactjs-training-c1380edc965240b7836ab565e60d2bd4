import './Mobile.css'

export function Mobile() {

    const st = {
        width: '100px',
        height: '100px'
    }

    return (
        <>
            <h1 className='brd'> Hello </h1>
            <div style={st}>
                {new Date().toISOString()}
            </div>
            <div>
                <input type='button' className='btn btn-danger' value='Okay' />
            </div>
        </>
    )
}