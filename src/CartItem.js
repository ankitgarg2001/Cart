import { render } from '@testing-library/react'
import React from 'react'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'MobilePhone',
            qty: 1,
            imag: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this.state',this.state);
        console.log('this.state.qty',this.state.qty);
        console.log('increase qty',this.state.qty+1); 
        this.state.qty = this.state.qty+1;     
    }
    decreaseQuantity = () => {
        console.log('this.state',this.state);
        console.log('this.state.qty',this.state.qty);
        console.log('increase qty',this.state.qty-1);
        this.state.qty = this.state.qty-1;    
    }
    render(){
        const {price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color : '#777'}}>qty {qty}</div>
                    <div className="cart-item">
                        {/* Button */}
                        <img 
                            alt="increase" 
                            className="actions-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="actions-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="actions-icons" 
                            src="https://image.flaticon.com/icons/png/512/1/1570.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
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
