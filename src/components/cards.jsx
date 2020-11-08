import React from 'react';
import {Link} from 'react-router-dom'
import './card.css'
import {connect } from 'react-redux'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



class Card extends React.Component{
    
    
    
    
    render(){
    

        let stateeValue = this.props.name.cards
        let sliceState = stateeValue.slice(0,12)
//        
        return(
            <div className='card_main_div'>
                <div className='sub_card_div'>
                    <div className='head_div'>
                        <h1 className='moree'>
                            More on Mobile phones
                            
                        </h1>
                        <Link className='view_more' to='' > view more </Link>
                    </div>
                    
                    <div className='cardDiv'>
                        <div className="card_div">

                     
                         {sliceState.map((v,i)=>{
                             return(
                                     

                                   <Link className='link ' key={i} to={`/productsitem/${v.id}`}>
                                        <div   className='state_card_div'>
                                    <div  className='card_img_div'>
                                    <img className='card_img'  src={v.img} alt=""/>
                                    
                                    </div>
                                    <div className='card_price_div'>
                                    <p key={i}> {v.price}</p>
                                    
                                    </div>
                                    <div className='card_para_div'>
                                    <p key={i}>{v.name}</p>
                                    </div>
                                    
                                    </div>
                                    </Link>

                                    )
                                    
                                })}
                                <div className='next_btn_div'> 
                                <div className='sub_next_btn_div' onClick={this.setNextProduct}>
                                    <NavigateNextIcon  className='nextBtn' />

                                </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>(
    
    {
    
    name:state.card,
    price:state
})
// state.map((i,v)=>{
// console.log(i.name,v)
// })

export default connect(mapStateToProps,null) (Card);