import React, {Component} from 'react';
import Products from './Products';
import {getProducts} from './API';

class Routeproducts extends Component {

  constructor(props){
    super(props)
    this.state = {
      products:[

      ]
    }
  }
  routeGetproducts = () => {
     getProducts().then(res => {
      this.setState({products:res.data})
    })
  }
  componentDidMount(){
   this.routeGetproducts();
  }
  
  render(){
    return (
      <div class="main">
        <h3>All products</h3>
        {
          this.state.products.map((product) => {

            var productProps = {
              ...product,
              key: product.id,
              refreshData:this.routeGetproducts
    
            };
            return (<Products {...productProps} />)
          })
        }
      </div>
    );
  }
}

export default Routeproducts;
