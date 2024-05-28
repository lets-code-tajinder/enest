import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import LeftSide from "./LeftSide";

class CheckOut extends React.Component {
    constructor(){
		super()
		this.state = {
			 
			abcd:[],
			uid:''
		}
	}
	componentDidMount() {
		const session =localStorage.getItem("uid");
		const fd = new FormData();
        fd.append('uidd', session);
			axios.post('http://localhost/enest1/checkout.php', fd).then(res=>{
				this.setState({abcd: res.data.mydatas});
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
                        <p>Check Out</p>
                    </div>
                    <div className="col-md-12 pt-3 pb-5 border mb-4">
                        <div className="col-md-11 m-auto">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>User Name</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.abcd.map((item)=>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.fullname}</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.qty}</td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </table>
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

export default CheckOut;
