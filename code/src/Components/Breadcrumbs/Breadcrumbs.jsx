import { useParams, Link, useLocation } from "react-router-dom"


export const Breadcrumbs = () => {
    let { id, product } = useParams()
    let location = useLocation()

    return (
        <div>
            <ul>
                <Link to='/'>Home - </Link>
                {
                    location.pathname.includes('/products') &&
                    <Link to='/products'>Products - </Link>
                }
                {
                    product &&
                    <Link to={`/products/${product}/${id}`}>{product} </Link>
                }
            </ul>
        </div>
    )
}