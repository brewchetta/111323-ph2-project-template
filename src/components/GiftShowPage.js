import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function GiftsShowPage() {

    const params = useParams()
    const [gift, setGift] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8000/gifts/${params.id}`)
        .then(res =>res.json())
        .then(data => setGift(data))
    }, [])

    return (
        <p>{gift.name}</p>
    )
}

export default GiftsShowPage