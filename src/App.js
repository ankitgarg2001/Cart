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
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'MobilePhone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
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
      </div>
    );
  }
}



export default App;
