import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
 import "react-responsive-carousel/lib/styles/carousel.min.css"; 
 import Header from './header'
import Menu from './menu'
import Footer from './Footer'

// import { Carousel } from 'react-responsive-carousel';



class ProductItem extends React.Component {


    render() {
        const id = this.props.match.params.id
        const state = this.props.item.cards
        console.log(id, state)
        const filter = state.filter(stateItems => stateItems.id === id)
        //   console.log(filter.map((v,i)=>{
        //       console.log(v)
        //   }))

        return (
            <div>
                <Header />
                <Menu />
                

                {filter.map((value, index) => {
                    return (
                        <div className='sub_chosing_product_div'>
                            <div>

                                <div>

                                    <img className='carousel' src={value.img} alt="" />

                                </div>

                                <div className='main_details_div'>
                                    <h4>Detail</h4>
                                    <div className='details_div' >
                                        <p>make</p>
                                        <p className='state_get_name'>{value.name}</p>
                                        <p>conditio</p>
                                        <p className='state_get_name'>{value.condition}</p>
                                    </div>

                                        <hr />
                                        <div className='description_div'>
                                            <h2>Description</h2>
                                            <p className='state_description'> {value.description}</p>

                                        </div>
                                </div>
                            </div>
                            <div className='user_InfoDiv_and_chat'>
                                <div className='Rs_and_detail_div'>
                                    <h2>{value.price}</h2>
                                    <p>{value.name} {value.description}</p>

                                </div>
                                <div className='seller_description_div'>
                                    <h3>Seller description</h3>
                                    <div className='user_img_or_name_div'>
                                      <img width='40px' height='50px' className='seller_img' src={value.img} alt=""/>
                                       <p className='seller_name'>{value.name}</p>

                                    </div>
                                    <div>
                                       <Link>
                                        <button className='chat_with_saller_btn' >Chat with seller</button>
                                       
                                       </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
                <Footer />


            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    item: state.card
})



export default connect(mapStateToProps, null)(ProductItem);