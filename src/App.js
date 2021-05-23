import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'MobilePhone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=316&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]
       
    }
}
handleDecreaseQuantity=(product)=>{
    const{products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 1){
       const items = products.filter((item)=>item.id!==products[index].id);
       this.setState({
           products:items
       })
       return;
    }
    products[index].qty-=1;
    this.setState({
        products: products
    })
}
handleIncreaseQuantity=(product)=>{
    const{products} = this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products: products
    })
}
handleDeleteProduct=(id)=>{
    const{products}  = this.state;
    const items = products.filter((item)=>item.id!==id);
    this.setState({
        products: items
    })
}
cartCount=()=>{
  const{products}=this.state;
  let count = 0;
  products.forEach((item)=>count+=item.qty);
  return count;
}
getCartTotal=()=>{
  const{products}=this.state;
  let total = 0;
  products.forEach((item)=>
    total+=(item.qty*item.price)
  );
  return total;
}
  render(){
    const{products} = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.cartCount()}
        />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style = {{padding: 10,fontSize: 20}}>
          TOTAL VALUE: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}



export default App;
