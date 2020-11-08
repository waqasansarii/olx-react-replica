import React from 'react'
import {Link} from 'react-router-dom'



class CopyRight extends React.Component{
    render(){
        return(
            <div className='copy_right_div'>
                <div>

                <p> Other countries </p>
                
                    <Link className='copyright_link'>india</Link>-
                    <Link className='copyright_link'>South Africa</Link>-
                    <Link className='copyright_link'>indonesia</Link>
                

                </div>
                <div>
                    <p>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                </div>

            </div>
        )
    }
}
export default CopyRight