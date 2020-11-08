import React from 'react'
import {Link} from 'react-router-dom'




class CategoryForPost extends React.Component{
    render(){
        return(
            <div>
                <div className='sub_div_chose_category'>
                    <div className='category_head_div'>
                        <h4>CHOOSE A CATEGORY</h4>
                    </div>
                    <div className='category_btn_div'>
                        <Link to='/post/attribute' className='category_link_mob'>
                          <button className='category_btn_mob'>Mobile</button>
                        
                        </Link>
                        <Link  className='category_link_car' to='/post/attribute'>
                          <button 
                          className='category_btn_car'
                          >Cars</button>
                        
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default CategoryForPost