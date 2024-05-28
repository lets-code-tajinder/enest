import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './../css/style.css';
import { Link } from "react-router-dom";
import Search from './Search';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



class Header extends React.Component {
  constructor(){
		super()
		 this.state ={
		 	search:'',
		 	search_redirect:false,
			redirect : false,
		 }
		 this.logout = this.logout.bind(this);
		 this.addForm = this.addForm.bind(this);
	  }
    addForm(e)
      {
	      this.setState({search_redirect:true})	       
      }
  componentDidMount(){
		if(localStorage.getItem("uid")){
		}
		else{
			console.log("call user feed");
			this.setState({redirect : true});
		}
  }
  logout(){
		localStorage.setItem("uid",'');
		localStorage.clear();
		this.setState({redirect : true});
		alert("logout Successfully");
	}
  
  render() {
    return (
			<>
				{(() => {
        if (this.state.search_redirect) {
          return (
            <div>
               <Search data={this.state.search} />
            </div>
          )
        } 
         else {
    return (
      <div>
        <div className="py-2" style={{backgroundColor:'#222121',color:'white'}}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>ENEST</h1>
                <p>THE BIGGEST CHOICE OF THE WEB</p>
              </div>
              <div className="col-md-4">
                {(() => {
                  if(this.state.redirect) {
                    return (
                      <Link to="/create-account">
                        <input type="button" className="login_button" value="Log In" />        
                      </Link>
                    )
                  }
                  else{
                    return(
                      <input type="button" className="login_button" value="Log Out" onClick={this.logout} />
                    )
                  }
              })()}
              </div>  
            </div>
          </div>
        </div>  
          <div className="container-fluid nav1">
            <div className="container">
              <Navbar  expand="lg">
                <Navbar.Brand className="m-0"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto float-start col-md-8">
                    <Nav.Link className="list_color" href="/">HOME</Nav.Link>
                    <Nav.Link className="list_color" href="/new-products">NEW PRODUCTS</Nav.Link>
                    <Nav.Link className="list_color" href="/special-products">SPECIAL</Nav.Link>
                    <Nav.Link className="list_color" href="/all-products">ALL PRODUCTS</Nav.Link>
                    <Nav.Link className="list_color" href="/contact">CONTACT</Nav.Link>
                  </Nav>
                  <Form className="d-flex float-end search_form" onsubmit={this.addForm}>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2 search_input"
                      value={this.state.search}
								      onChange={e => this.setState({ search: e.target.value })}
                    />
                      <Link to = {`/search-products/${this.state.search}`}>
                      <Button type="submit" variant="outline-success" className="search_button">Search</Button>
                    </Link>  
                  </Form>
                  
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>  
      </div>
      )
    }
  })()}
      </>
    );
  }
}
export default Header;
