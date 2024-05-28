import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost/enest1/fetch_category.php")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  render() {
    return (
      <div>
          <div className="col-md-12 border cat_heading">
            <p className="mt-3">CATEGORIES</p>
          </div>
          <div className="col-md-12">
            <ul className="list-inline border">
              {this.state.data.map((result) => {
                return (
                  <Link to = {`/show-products/${result.id}`}
                  className="text-decoration-none text-dark">
                    <li className="border-bottom py-2 px-3 ">
                      {result.category_name}
                    </li>
                  </Link>
                );
              })}
            </ul>
        </div>
      </div>
    );
  }
}
export default LeftSide;
