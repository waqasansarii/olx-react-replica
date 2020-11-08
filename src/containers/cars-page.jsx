import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/Footer'
import FilterComponent from '../components/filter'
import {Link} from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Imgcom from '../components/image'


import {connect} from 'react-redux'




class CarsPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            setItem:this.props.stateItem.cards.filter(item => item.name =='car') 

        }
}

filterHandle=()=>{
    // console.log(props)
    let fil =this.state.setItem.filter(item=>item.model==='alto')
    console.log(fil)
    this.setState({
        setItem:fil
    })
    // console.log(this.state.setItem)
}
AllCategory=()=>{

    this.setState({
        setItem:this.props.stateItem.cards.filter(item => item.name =='car') 
      
    })
}
    render(){

        let {setItem} = this.state

        // let stateItem = this.props.stateItem.cards
        // const idd=this.props.match.path

    //   let filter = stateItem.filter(items => items.name =='car' )

        const id = this.props.match.path
        // console.log(id)
        return(
            <div>
                <Header />
                <Menu />
                <Imgcom />

            <div className='car_mob_page_div'>

                <div>
                    <FilterComponent AllCategory={this.AllCategory} filterHandle={this.filterHandle} item={id} />
                </div>
                
                <div className='main_car_mob_div' >
                {setItem.map((value,index)=>{
                    return(
                        <Link to={`/productsitem/${value.id}`} key={index} className='car_mobile_card_link'>
                          <div key={index} className=" sub_car_mob_page_div">
                              <div className='card_img_div'>

                              <img className='card_img' src={value.img} width='60px' alt=""/>
                              <FavoriteBorderIcon className='heart_icon' />
                              </div>
                              <div className='card_price_div'>
                                <p>{value.price}</p>
                              </div>
                              <div className='card_para_div'>
                                  <p>{value.name} {value.model}</p>
                              </div>
                          </div>   
                        </Link>
                          
                    )
                })}
                </div>

            </div>
            <Footer />
            </div>
        )
    }
}

const mapStateToProps =(state)=>({
    stateItem : state.card
})

export default connect(mapStateToProps,null) (CarsPage)