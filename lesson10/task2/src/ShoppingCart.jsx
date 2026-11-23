import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';
class ShoppingCart extends Component{
    state={
        cartItems: [{
            id: '1',
            name: 'IPhone 11',
            price:999,
        },
        {
            id:'2',
            name: 'IPad Pro',
            price: 799
        },
        
        ]
    }
    render(){
        const count = this.state.cartItems.length;
        return(
            <div className="column">
                <CartTitle userName={this.props.userData} count={count}/>
                <ProductsList cartItems={this.state.cartItems}/>
            </div>
        )
    }
}
export default ShoppingCart;