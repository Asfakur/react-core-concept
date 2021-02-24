import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nayoks = ['Razzak', 'Jasim', 'Alomgir', 'Salman', 'Shuvo', 'Arfin'];

  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name: 'Pdf Reader', price: '6.66'},
    {name: 'Premier Elements', price: '246.66'}
  ]

  const productNames = products.map(product => product.name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Custom coding start here</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          <p>Here start Products</p>
          {
            productNames.map(product => <li>{product}</li>)
          }

        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {/* <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'pink',
    height:'300px',
    width:'400px',
    float:'left'
  }
  const {name, price} = props.product; //this is called destructure
  console.log(name,price);
  return (

    

    // <div style={productStyle}>
    //   <h3>Name:{props.name}</h3>
    //   <h5>Price:{props.price}</h5>
    //   <button>Buy now</button>
    // </div>
    <div style={productStyle}>
      {/* <h3>Name:{props.product.name}</h3> */}
      {/* destructure element */}
      <h3>Name:{name}</h3> 
      <h5>Price:{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {

  return (
    <div style={{border: '2px solid red', margin: '10px', width:'400px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.job}</h3>
    </div>
  )
}

export default App;
