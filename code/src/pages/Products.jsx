import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


export const Products = () => {
    const [products, setProducts] = useState([])
    let url = 'https://dummyjson.com/products'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, [])

    console.log(products);

    return (
        <>
            <h1>Products: </h1>

            {
                products &&
                products.map((product, index) => {
                    return (
                        <h2 key={index}>
                            <Link to={`/products/${product.title.replaceAll(' ', '-')}/${product.id}`}>
                                {product.title}
                            </Link>
                        </h2>
                    )
                })
            }
        </>

    )
}