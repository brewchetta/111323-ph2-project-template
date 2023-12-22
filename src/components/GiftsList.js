import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GiftsList() {

    const [gifts, setGifts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/gifts')
        .then(res => res.json())
        .then(data => setGifts(data))
    }, [])

    return (
        <div>
            <h1>Gifts List Yay</h1>

            {gifts.map(gift => <Link key={ gift.id } to={ `/gift-show/${gift.id}` }>{ gift.name }</Link>)}

        </div>
    )
}

export default GiftsList