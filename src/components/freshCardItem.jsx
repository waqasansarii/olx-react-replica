import React from 'react'
import {Link} from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import {Link} from 'react-router-dom'
import {connect } from 'react-redux'
// import ProductItem from '../components/productsItem-page'


class CardsItem extends React.Component{
    
    render(){
        // console.log(this.props.price.cards)
        // console.log(this.props)

        let stateValues = this.props.price.cards
        console.log(stateValues)
        return(
            <div className='freshCard_div'>
                {stateValues.map((value,index)=>{
                    return(
                        <Link to={`/productsitem/${value.id}`} key={index}  className='card_link'>
                        {/* {this.state.val? <ProductItem  name={value.price} />:null}  */}
                          <div key={index} className=" sub_freshCard_div">
                              <div className='card_img_div'>

                              <img className='card_img' src={value.img} width='60px' alt=""/>
                              <FavoriteBorderIcon className='heart_icon' />
                              </div>
                              <div className='card_price_div'>
                                <p>{value.price}</p>
                              </div>
                              <div className='card_para_div'>
                                 <p>{value.name}</p>
                              </div>
                          </div>   
                        </Link>
                          
                    )
                })}
                
            </div>
        )
    }
}

let mapStateToProps=(state)=>({
   price : state.card
})

export default connect(mapStateToProps) (CardsItem)