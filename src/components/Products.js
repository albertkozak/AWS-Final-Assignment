import React from "react";

class Products extends React.Component {
  constructor(props) {
    super();
    this.state = { products: [] };

    fetch(
      "https://08j4ze8uy1.execute-api.us-east-1.amazonaws.com/prod/sunglasses"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="glasses">
          {this.state.products.map(product => {
            return (
              <div key={product.id} className="item">
                <br></br>
                <h2>
                  <b>{product.title}</b>
                </h2>
                <p>
                  <i>{product.description}</i>
                </p>
                <img src={product.imageURL} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
