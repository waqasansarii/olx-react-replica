import React from 'react'
import {Link} from 'react-router-dom'
import OLXLogo from '../images/Logo_OLX.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './post-page.css'



class HeaderPostPage extends React.Component{
    render(){
        return(
            <div className='post_page_headr_div'>
                <div className='post_page_olx_logo_div'>
                    <Link to='/'>
                       <ArrowBackIcon />
                       <img className='postPage_logo' src={OLXLogo} alt=""/>
                    </Link>
                </div>
                <div>
                    <h2 className='heading_post'>
                        POST YOUR AD
                    </h2>
                </div>
            </div>
        )
    }
}

export default HeaderPostPage