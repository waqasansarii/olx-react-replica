import React from 'react';
import {Link} from 'react-router-dom'
// import Routers from '../routers/router'


class MobilePage extends React.Component{
    render(){
        const mob = {
            color : 'black',
            textDecoration:'none'
        }
        return(
            <div style={{marginTop:'8px',marginLeft:'8px'}}>
                   <Link to='/mobile-phones' style={mob} >Mobiles </Link>
            </div>
        )
    }
}

export default MobilePage;