import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./../css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import LeftSide from "./LeftSide";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost/enest1/fetch_product.php")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  render() {
    return (
      <>
        <Header />
       
        <div className="container">
          <img
            className="main_img img1"
            src={require("./../images/16.png").default}
            alt="no img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <LeftSide />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12 contact-us py-3 px-3 mb-4">
                  <p>FEATURED PRODUCTS</p>
                </div>
              </div>
              <div className="row">
                {this.state.data.map((result) => {
                      return (
                <div className="col-md-4 mb-3">
                  <div className="col-md-12 border px-2 py-3">
                    <img style={{width:'100%',height:'120px'}} alt="no img" src={`/images/${result.product_image}`}  />
                    <p className="m-0 pro_p">{result.product_name}</p>
                    <h2 className="m-0 pro_h2">{result.product_price}</h2>
                    <hr />
                    <div className="col-md-12 pro_i ps-2">
                      <i className="fa fa-plus-circle icon" aria-hidden="true"></i>
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      <Link to = {`/buy-products/${result.id}`}>
                      <input className="pro_input" type="submit" name="" value="Add to cart" />
                      </Link>
                    </div>
                  </div>
                </div>
                )
              })}	
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
