import { Link } from 'react-router-dom'

function FourOhFour() {
    return (
        <div>
            <h1>BAH HUMBUG - YOU GOT A 404</h1>

            <Link to='/gifts-list'>Go Back Home</Link>
        </div>
    )
}

export default FourOhFour