import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import LeftSide from "./LeftSide";

class Contact extends React.Component {
    constructor(){
		super()
		this.state = {
			full_name:'',
			email:'',
			message:''
		}
		this.addForm = this.addForm.bind(this);
	}
	addForm(e)
    {
	  e.preventDefault();
      const fd = new FormData();
      fd.append('full_name', this.state.full_name);
      fd.append('email', this.state.email);
      fd.append('message', this.state.message);
      axios.post('http://localhost/enest1/contact.php', fd).then(res=>
      {
          this.setState({
               full_name:'',
               email :'',
               message :'',

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
                    <div className="row">
                        <div className="col-md-12 contact-us py-3 px-3 mb-4">
                            <p>CONTACT US</p>
                        </div>
                    </div>   
                    <div className="row">
                        <div className="col-md-12 border pb-4">
                            <div className="col-md-11 pt-4 m-auto">
                                <p className="p-0 m-0">Customer Service:91 7508115758</p>
                                <p className="p-0 m-0">Ludhiana,Punjab,INDIA</p>
                                <p className="p-0 m-0">Yorex Infotect</p>
                            </div>
                            <hr />
                            <div className="col-md-12 border pt-2 pb-5 mb-5">
                                <h4 className="fs-4 px-3">Contact Us</h4>
								<p className="p-0 m-0 fs-6 px-3">Have a question? We have 24x7 Customer Service.</p>
								<p className="p-0 m-0 fs-6 px-3">Before you contact us,skim through our self Serve option and Frequently Asked Question for Quicker answer.</p>
								<p className="p-0 m-0 fs-6 px-3">Want to know more about the status of the orders?</p>
								<p className="p-0 m-0 fs-6 px-3 pb-5">Login to view our order.</p>
							</div>
                            <div className="col-md-12 border pt-2 pb-5 position_rel">
                                <div className="col-md-2  border position_abs">
									<p className="p-0 m-0 py-2 text-center">Contact Us</p>
								</div>  
                                <div className="float-end px-2">
									<span>*Required information</span>
								</div>
                                <div className="col-md-11 mx-auto pt-5">
                                    <form onSubmit={this.addForm}>
                                        <table>
                                            <tr>
                                                <td ><p>Full Name* </p></td>
                                                <td><input type="text" name="" value={this.state.full_name}
                                                        onChange={e => this.setState({ full_name: e.target.value })}/></td>
                                            </tr>
                                            <tr>
                                                <td > <p>E-mail Address </p></td>
                                                <td><input type="email" name="" value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}/></td>
                                            </tr>
                                            <tr>
                                                <td> <p>Message</p></td>
                                                <td><textarea value={this.state.message}
                                                    onChange={e => this.setState({ message: e.target.value })}></textarea></td>
                                            </tr>
                                        </table>
                                        <div className="snd-btn">
                                            <button className="pro_input">Send Now</button>
                                        </div>
                                    </form>
                                </div>      
                        	</div>
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

export default Contact;
