import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Details() {

    let { id, product } = useParams()

    const [products, setProducts] = useState([])

    let url = 'https://dummyjson.com/products/' + id

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    console.log('Details', products);

    return (
        <div>
            <h2>{products.title}</h2>
            <p>{products.description}</p>

        </div>
    )
}