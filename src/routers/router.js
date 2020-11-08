import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../containers/home'
import Mobile_Phones from '../containers/mobile-phones-page'
import CarsPage from '../containers/cars-page'
import ProductItem from '../components/productsItem-page'
import PostPage from '../containers/post-page'
import Chat_page from '../containers/chat.page'
import Attributes from '../containers/attributes-page'


class Routers extends Component{
    render(){
        return(
                <Router>
                    <Switch>
                        <Route exact path = '/' component={HomePage} />
                        <Route  path='/mobile-phones' component={Mobile_Phones} />
                        <Route path='/cars' component={CarsPage} />
                        <Route path='/productsitem/:id' component={ProductItem} / >
                        <Route exact path='/post' component={PostPage} />  
                        <Route path='/chat' component={Chat_page}   />
                        <Route path='/post/attribute' component={Attributes} />
                        <Route path='*' component={()=>{return <h3>404 not found</h3>}} / >
                            
                        
 
 
                    </Switch>

                </Router>

        )
    }
}

export default Routers;