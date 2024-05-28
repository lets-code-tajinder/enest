import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      full_name:'',
      email:'',
      password:'',
      user_name: "",
      user_pass: "",
      login_detail: [],
      redirect : false,
    };
    this.addFormData = this.addFormData.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }
  addFormData(e)
    {
	  e.preventDefault();
      const fd = new FormData();
      fd.append('full_name', this.state.full_name);
      fd.append('email', this.state.email);
      fd.append('password', this.state.password);
      axios.post('http://localhost/enest/signup.php', fd).then(res=>
      {
          this.setState({
               full_name:'',
               email :'',
               password :'',
			         

           })
       }).catch(errors=>{
		console.log(errors)
	  })
      
    }

  checkLogin(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("username", this.state.user_name);
    fd.append("userpass", this.state.user_pass);
    axios
      .post("http://localhost/enest1/checklogin.php", fd)
      .then((res) => {
        console.log(res.data.msg);
        this.setState({ login_detail: res.data.myData });
        this.setState({
          user_name: "",
          user_pass: "",
        });
        if (res.data.msg) {
          localStorage.setItem("uid", res.data.myData[0].id);
          this.setState({ redirect: true });
          this.props.history.push("/");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  render() {
    return (
      <>
        <Header />
        <div className="container my-3">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 login_here pb-5">
              <form onSubmit={this.checkLogin}>
                <div className="col-md-6 offset-md-4">
                  <h4>Login Here</h4>
                  <br />
                </div>
                <div className="form-group row">
                  <label className="col-md-4 col-form-label text-md-end">
                    <b>Username</b>
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.user_name}
                      onChange={(e) =>
                        this.setState({ user_name: e.target.value })
                      }
                    />
                    <br />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="password"
                    className="col-md-4 col-form-label text-md-end"
                  >
                    <b>Password</b>
                  </label>
                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.user_pass}
                      onChange={e => this.setState({ user_pass: e.target.value })}
                    />
                    <br />
                  </div>
                </div>
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 login_here pb-5">
              <form onSubmit={this.addFormData}>
                <div className="col-md-6 offset-md-4">
                  <h5>New to Enest ? <Link className="text-decoration-none text-secondary" to="/create-account">Sign Up</Link></h5>
                  <br />
                </div>
                <div className="form-group row">
                  <label className="col-md-4 col-form-label text-md-end">
                    <b>Full Name</b>
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.full_name}
										  onChange={e => this.setState({ full_name: e.target.value })}
                    />
                    <br />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-4 col-form-label text-md-end">
                    <b>Email</b>
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.email}
										  onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="password"
                    className="col-md-4 col-form-label text-md-end"
                  >
                    <b>Password</b>
                  </label>
                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
										  onChange={e => this.setState({ password: e.target.value })}
                    />
                    <br />
                  </div>
                </div>
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="login_btn">
                    Sign Up
                  </button>
                </div>
              </form>
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

export default LogIn;
