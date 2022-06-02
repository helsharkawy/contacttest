import { Link } from "react-router-dom";

const Products = ({products}) => {
    return (
        <div className="products" id="products">
            <div className="container">
                <div className="section-title">
                    <h2>منتجاتنا</h2>
                </div>
                <div className="all-product">
                    {
                        products.map((product) => (
                            
                                <div className="product" key={product.id}>
                                    <Link to={'/products/'+product.id}>
                                    <div className="P-image">
                                        <img src={product.thumbnail} alt={product.title}/>
                                    </div>
                                    <div className="P-name">
                                        <span>{product.title}</span>
                                    </div>
                                    </Link>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Products;