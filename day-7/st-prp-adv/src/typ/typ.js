import PropTypes from 'prop-types';

export function Typ({ nm, num, isDt }) {
    console.log(typeof nm)
    console.log(typeof num)
    console.log(typeof isDt)

    if (nm) {
        console.log('show alert')
    }

    return (
        <>
        </>
    )
}

Typ.propTypes = {
    nm: PropTypes.string,
    num: PropTypes.number,
    isDt: PropTypes.bool
}
