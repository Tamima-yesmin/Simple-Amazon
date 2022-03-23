import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {
    const { name, img, price, ratings, seller } = props.product;
    const { handleClick, product } = props;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handleClick(product)} className="cart-btn">
                <p>Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    )
}
