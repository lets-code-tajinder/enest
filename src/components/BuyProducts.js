import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import LeftSide from "./LeftSide";

class BuyProducts extends React.Component {
    constructor(){
		super()
		this.state = {
			product_detail:[],
			title:'',
			pid:'',
			uid:''
		}
		this.addFormData = this.addFormData.bind(this);
		this.input = React.createRef();
		this.input1 = React.createRef();
	}
	componentDidMount() {
		const session =localStorage.getItem("uid");
		this.setState({uid: session});
		const url = this.props.match.params.url;
		const fd = new FormData();
        fd.append('pid', url);
		if(url){
			axios.post('http://localhost/enest1/pro_detail.php', fd).then(res=>{
				this.setState({product_detail: res.data.myData});
			}).catch(errors=>{
			  console.log(errors)
			})
		}
	}
	addFormData(e)
    {
	  e.preventDefault();
	  const pvalue = this.input.current.value;
	  const uid = this.input1.current.value;
	  alert(uid);
      const fd = new FormData();
      fd.append('pid', pvalue);
      fd.append('uid', uid);
      fd.append('qty', this.state.qty);
      axios.post('http://localhost/enest1/cart.php', fd).then(res=>
      {
          this.setState({
               pid:'',
               uid :'',
               qty :''
           })
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
                {(() => {
                    if (Array.isArray(this.state.product_detail) && this.state.product_detail.length) {
                    return (
                        <form onSubmit={this.addFormData}>
                    <div className="col-md-12 contact-us py-3 px-3 mb-4">
                        <p>{this.state.product_detail[0].product_name}</p>
                    </div>
                    <div className="col-md-12 pt-3 pb-5 border mb-4">
                        <div className="row">    
                            <div className="col-md-4">
                                <div className="col-md-10 m-auto mb-5">
                                    <img style={{width:'100%',height:'160px'}} src={`/images/${this.state.product_detail[0].product_image}`} alt="no img" />
                                </div>
                                <div className="col-md-10 border m-auto">
                                    <p className="p-2 m-0 text-center">In Stock: {this.state.product_detail[0].product_quantity}</p>
                                </div>
                                <div className="col-md-10 mt-5 m-auto">
                                    <p className="m-0 pt-5 p-0"><b>Details:</b></p>
                                    <p className="m-0 p-0">{this.state.product_detail[0].product_name}</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-12 mb-3">
                                    Date Added: 2013-06-01  08:05:32
                                </div>
                                <div className="col-md-12 mb-4">
                                    <h4>{this.state.product_detail[0].product_name}</h4>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <p className="p-0 m-0">Model: {this.state.product_detail[0].product_name}</p>
                                    <p className="m-0 p-0">Manufacturer: {this.state.product_detail[0].product_name}</p>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <form>
                                        <table>
                                            <tr>
                                                <td className="qty">Enter quantity</td>
                                                <td><input type="text" name="qty" value={this.state.qty}
                                                onChange={e => this.setState({ qty: e.target.value })} /></td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <h2 className="pro_h2">{this.state.product_detail[0].product_price}</h2>
                                </div>
                                <input type="hidden" name="pid" ref={this.input} value={this.state.product_detail[0].id} />
								<input type="hidden" name="uid" ref={this.input1} value={this.state.uid} />
									
                                <div className="col-md-12">
									<input className="pro_input" type="submit" name="" value="Add to Cart" />
								</div><br />
                                <div className="col-md-12">
									<Link to ="/checkout">
									    <input className="pro_input" type="submit" name="" value="CheckOut" />
									</Link>
								</div>
                            </div>
                        </div>    
                    </div>
                    </form>
                )
            }
        })()} 
                <div className="col-md-12 mt-4 border">
                    <div className="col-md-11 mx-auto py-4">
                        <form>
                            <table>
                                <tr>
                                    <td ><p>Enter Name </p></td>
                                    <td><input type="text" name="" /></td>
                                </tr>
                                <tr>
                                    <td > <p>Enter E-mail</p></td>
                                    <td><input type="email" /></td>
                                </tr>
                                <tr>
                                    <td> <p>Enter Review</p></td>
                                    <td><textarea cols="22"></textarea></td>
                                </tr>
                                <tr>
                                    <td ><p>Rating </p></td>
                                    <td><input type="text" name="" /></td>
                                </tr>
                            </table>
                            <div className="snd-btn">
                                <button className="pro_input">Submit Query</button>
                            </div>
                        </form>
                    </div>
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

export default BuyProducts;
