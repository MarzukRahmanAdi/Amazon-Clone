import React from 'react'
import { useStateValue } from '../StateProvider'
import './product.css'

function Product({ id ,  title , image , price , rating }) {
    const [ { basket } , dispatch] = useStateValue()
    console.log("your basket prices" , basket)
    const addToBusket = () => {
        dispatch({
            type :'ADD_TO_BASKET',
            items : {
                id : id ,
                title : title ,
                image : image , 
                price : price ,
                rating : rating ,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                    { Array(rating).fill().map((_, i) => (<p>⭐</p>) ) }
                    
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBusket}>Add to Basket</button>
        </div>
    )


} 

export default Product ;
