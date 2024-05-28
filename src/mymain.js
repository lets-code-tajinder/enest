import React from 'react';
//import ReactDOM from 'react-dom';   
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/LogIn';
import NewProducts from './components/NewProducts';
import BuyProducts from './components/BuyProducts';
import AllProducts from './components/AllProducts';
import SpecialProducts from './components/SpecialProducts';
import AllGetProducts from './components/AllGetProducts';
import Contact from './components/Contact';
import CheckOut from './components/CheckOut';
import Search from './components/Search';


class MyMain extends React.Component {
   render() {
      return (
         <Router>
            <div>
               <Route exact path="/" component={Home} />
               <Route  path="/create-account" component={LogIn} />
               <Route  path="/new-products" component={NewProducts} />
               <Route  path="/special-products" component={SpecialProducts} />
               <Route  path="/all-products" component={AllGetProducts} />
               <Route  path="/contact" component={Contact} />
               <Route  path="/checkout" component={CheckOut} />
            
               <Route path="/show-products/:url" render={(props) => (
               <AllProducts key={props.match.params.url} {...props} />)
                 } />

               <Route path="/buy-products/:url" render={(props) => (
               <BuyProducts key={props.match.params.url} {...props} />)
                 } /> 

               <Route path="/search-products/:url" render={(props) => (
               <Search key={props.match.params.url} {...props} />)
                 } />
            
            </div>
         </Router>
      );
   }
}

export default MyMain;