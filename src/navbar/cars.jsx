import React from 'react';
import {Link} from 'react-router-dom'
// import Routers from '../routers/router'


class CarsPage extends React.Component{
    render(){
        return(
            <div style={{marginTop:'8px',marginLeft:'13px'}}>
                   <Link to='/cars' style={{color:'black',textDecoration:'none'}} >Cars </Link>
            </div>
        )
    }
}

export default CarsPage;