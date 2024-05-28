import React from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Home1 extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        id:'',
        data: [],
      }
      this.addFormData = this.addFormData.bind(this);
      this.displayData = this.displayData.bind(this);  
   }
   //Form Submission
   addFormData(evt)
      {
        
        evt.preventDefault();
        let formData = new FormData();
        formData.append('name', this.state.name)
        axios.post('http://localhost/www/addform.php', formData
        ).then(res=>
        {
          if(res.data.rec === "You Data added successfully")
          {
            Swal.fire({
              title: 'React',
              text: res.data.rec,
              //type: 'success',
              icon: 'success',        
            });
          }
          else{
            Swal.fire({
              title: 'React',
              text: res.data.data,
              type: 'success',
              icon: 'warning',        
            }); 
          }
          this.setState({
            name: '',
            id:'',
          });
        });
      }

    //DisplayData  
    displayData(evt){
      axios.get('http://localhost/www/display.php').then(res => 
      {
        this.setState({data: res.data});
      });
    }
      
      //DeleteData
      deleteUser(userid)
      {
        const fd = new FormData();
        fd.append('deleteid', userid);           
        axios.post('http://localhost/www/delete.php', fd
        ).then(res=>
        {
          //Get all users details in bootstrap table
          axios.get('http://localhost/www/display.php').then(res => 
          {
            //Storing users detail in state array object
            this.setState({data: res.data});
          }); 
            //Success Message in Sweetalert modal
            Swal.fire({
              title: 'User id of '+userid+' has been deleted.',
              text: res.data.data,
              type: 'success',
              icon: 'success',
          });
        });
      }


  render() {
   
    return (
     <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 text-center">
            <form ref={(e) => this.myFormRef = e } id="create-course-form">
              <div className="form-group">
                <input type="text" className="form-control" id="Username" placeholder="Enter name" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
            </form>
            <br />
            <div className="col-md-12">
              <button type="button" className="btn btn-primary" onClick={this.displayData}>Display</button>
            </div>
          </div>         
        </div>
        <br />
        <br />
        <br />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((result) => {
              return (
                <tr>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>
                    <button className="bg-danger" onClick={e => {this.deleteUser(result.id)}}> <i class="fas fa-trash"></i> </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    
      </>
    )
  };
}

export default Home1;