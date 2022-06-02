import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";

const ProductPreview = () => {
    const { id } = useParams();
    const [product , setProduct] = useState([]);
    const [mainImage, setMainImage] = useState('');
    
    function handleImage(e) {
        setMainImage(e.target.src)
    }

    async function fetchProduct () {
    let data = await fetch('https://dummyjson.com/products/'+id)
    .then(res => (res.json()))
    setProduct(data);
    setMainImage(data.thumbnail)
    console.log(data);
    }

    useEffect(() => {
    fetchProduct()
    }
    ,[]);


    return (
        <div className='product-preview'>
            <div className="container">
                <div className="product-details">
                    <div className="product-images">
                        <div className="main-image">
                            <img src={mainImage} alt=''/>
                        </div>
                        <div className="other-images">
                            {product.images && product.images.map((imge) => (
                                <div className="image" >
                                    <img src={imge} alt='' onClick={(e)=> {handleImage(e)}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="details">
                        <h3 className="title">{product.title}</h3>
                        <div className="price">
                            <span>{product.price}$</span>
                            <span>{product.discountPercentage}% off</span>
                        </div>
                        <div className="discription">
                            <h4>Description</h4>
                            <p>{product.description}</p>
                        </div>
                        <p>
                            <span>Category: </span>
                            <span>{product.category}</span>
                        </p>
                        <p>
                            <span>Brand: </span>
                            <span>{product.brand}</span>
                        </p>
                        <h4>Additional Info</h4>
                        <div className="additionl-info">
                            <p>
                                <span>Rating: </span>
                                <span>{product.rating}</span>
                            </p>
                            <p>
                                <span>Stock: </span>
                                <span>{product.stock}</span>
                            </p>
                        </div> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductPreview;