import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import AppStore from '../images/Appp.jpg'
import CopyRight from './copyright'


class Footer extends React.Component{
    render(){
        return(
            <div className='main_footer_div'> 
            <hr/>
                 <div className='sub_footer_div'>
                     <div className='firstRow'>
                         
                         <h5>Popular catagories</h5>
                         <ul className='footer_ul_one'>
                             <li className='footer_li_one'>
                                <Link to='' className='footer_link' > Cars </Link>
                            </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Flats for rent</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Jobs</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Mobiles phone</Link>
                             </li>
                         </ul>
                     </div>

                     <div className='firstRow'>
                         
                         <h5>TRENDING SEARCHES</h5>
                         <ul className='footer_ul_one'>
                             <li className='footer_li_one'>
                                <Link to='' className='footer_link' > Bikes </Link>
                            </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Watches</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Books</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Dogs</Link>
                             </li>
                         </ul>
                     </div>
                     <div className='firstRow'>
                         
                         <h5>ABOUT US</h5>
                         <ul className='footer_ul_one'>
                             <li className='footer_li_one'>
                                <Link to='' className='footer_link' > About OLX Group </Link>
                            </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>OLX blogs</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Contact us</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>OLX for businesses</Link>
                             </li>
                         </ul>
                     </div>
                     <div className='firstRow'>
                         
                         <h5>OLX</h5>
                         <ul className='footer_ul_one'>
                             <li className='footer_li_one'>
                                <Link to='' className='footer_link' > Help </Link>
                            </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Sitemap</Link>
                             </li>
                             <li className='footer_li_one'>
                                 <Link to='' className='footer_link'>Legal & Privacy information</Link>
                             </li>

                         </ul>
                     </div>
                     
                     <div className='firstRow' >
                         <h5>FOLLOW US</h5>
                         <ul className='footer_social'>
                             <li>
                                 <Link to='' className='footer_link'><FacebookIcon className='facebook_icon' /> </Link>
                             </li>
                             <li>
                                 <Link to='' className='footer_link'> <TwitterIcon /> </Link>
                             </li>
                             <li>
                                 <Link to='' className='footer_link'> <YouTubeIcon /> </Link>
                             </li>
                             <li>
                                 <Link to='' className='footer_link'> <InstagramIcon /> </Link>
                             </li>
                         </ul>
                         <div className='playStore_btn_div'>

                         <img src={AppStore} width='60px'  alt=""/> 
                         <button>folle</button>
                         </div>
                     </div>
                 </div>
                    <div className='copyright'>
                        <CopyRight />
                    </div>

            </div>
        )
    }
}

export default Footer