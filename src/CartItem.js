import { render } from '@testing-library/react'
import React from 'react'

const CartItem = (props) =>{
    const {price, title, qty, img} = props.product;
    const{product, onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize : 25}}>{title}</div>
                <div style={{color : '#777'}}>Rs {price}</div>
                <div style={{color : '#777'}}>Qty: {qty}</div>
                <div className="cart-item">
                    {/* Button */}
                    <img 
                        alt="increase" 
                        className="actions-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                        onClick={()=>onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="actions-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        onClick={()=>onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="actions-icons" 
                        src="https://image.flaticon.com/icons/png/512/1/1570.png"
                        onClick={()=>onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}


const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
}

export default CartItem;
