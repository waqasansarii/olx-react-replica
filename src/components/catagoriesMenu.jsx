import React from 'react'
import {Link} from 'react-router-dom'



class CatagoriesMenu extends React.Component{
    render(){
        return(
            <div className='main_nav_menu_div'>
                <div className='sub_nav_menu_div'>
                   <div className='main_navbarIn_menu_div'>
                       <div className='navbarIn_menu_div'>
                           <h4>Mobile phones</h4>
                           <ul className='navbar_menu_ul'>
                              <li>
                                  <Link className="navbar_menu_link" >Mobile Phones</Link>
                              </li>
                              <li>
                                  <Link className="navbar_menu_link">Tablets</Link>
                              </li>
                           </ul>
                       </div>
                       <div className='navbarIn_menu_div'>
                           <h4>jobs</h4>
                           <ul className='navbar_menu_ul'>
                              <li>
                                  <Link className="navbar_menu_link">Mobile Phones</Link>
                              </li>
                              <li>
                                  <Link className="navbar_menu_link">Tablets</Link>
                              </li>
                           </ul>
                       </div>
                       <div className='navbarIn_menu_div'>
                           <h4>bikes</h4>
                           <ul className='navbar_menu_ul'>
                              <li>
                                  <Link className="navbar_menu_link">Mobile Phones</Link>
                              </li>
                              <li>
                                  <Link className="navbar_menu_link">Tablets</Link>
                              </li>
                           </ul>
                       </div>
                       <div className='navbarIn_menu_div'>
                           <h4>clothes</h4>
                           <ul className='navbar_menu_ul'>
                              <li>
                                  <Link className="navbar_menu_link">Mobile Phones</Link>
                              </li>
                              <li>
                                  <Link className="navbar_menu_link">Tablets</Link>
                              </li>
                           </ul>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default CatagoriesMenu