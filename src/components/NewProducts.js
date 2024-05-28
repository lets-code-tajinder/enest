import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import LeftSide from "./LeftSide";

class NewProducts extends React.Component {
    constructor(){
		super()
		this.state = {
			product_detail:[],
			title:''
		}
	}
	componentDidMount() {
	
			axios.post('http://localhost/enest1/new_products.php').then(res=>{
				this.setState({product_detail: res.data.myData});
			}).catch(errors=>{
			  console.log(errors)
			})
		
	}
  render() {
    return (
      <>
        <Header />
        <div className="container my-3">
            <div className="row">
                <div className="col-md-4">
                    <LeftSide />
                </div>
                <div className="col-md-8">
                    <div className="col-md-12 contact-us py-3 px-3 mb-4">
                        <p>New Products</p>
                    </div>
                    {this.state.product_detail.map((result) => {
                       return (
                    <div className="col-md-12 pt-3 pb-5 border mb-4">
                        <div className="row">    
                            <div className="col-md-4">
                                <div className="col-md-10 m-auto mb-5">
                                    <img style={{width:'100%',height:'160px'}} src={`/images/${result.product_image}`} alt="no img" />
                                </div>
                                <div className="col-md-10 border m-auto">
                                    <p className="p-2 m-0 text-center">In Stock: {result.product_quantity}</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-12 mb-3">
                                    Date Added: 2013-06-01  08:05:32
                                </div>
                                <div className="col-md-12 mb-4">
                                    <h4>{result.product_name}</h4>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <p className="p-0 m-0">Model: {result.product_name}</p>
                                    <p className="m-0 p-0">Manufacturer: {result.product_name}</p>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <h2 className="pro_h2">{result.product_price}</h2>
                                </div>
                                <div className="col-md-12">
									<Link to = {`/buy-products/${result.id}`}>
									    <input className="pro_input" type="button" name="" value="BUY NOW" />
									</Link>
								</div>
                            </div>
                        </div>    
                    </div>
                    )
                })}	
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

export default NewProducts;
