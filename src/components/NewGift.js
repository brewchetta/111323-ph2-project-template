import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewGift() {

    const [name, setName] = useState('')

    const navigate = useNavigate()

    function handleChange(event) {
        setName(event.target.value.replace('heck', '****'))
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch('http://localhost:8000/gifts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name })
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(newGift => {
                    navigate(`/gift-show/${newGift.id}`)
                })
            } else {
                alert("OH NO SOMETHING WENT WRONG")
            }
        })
    }

    return (
        <div>
            <h1>New Gift Page</h1>

            <form onSubmit={handleSubmit}>

                <input type='text' 
                name='name'
                onChange={handleChange}
                value={name} />

                <input type='submit' value='Add New Gift' />

            </form>

        </div>
    )
}

export default NewGift