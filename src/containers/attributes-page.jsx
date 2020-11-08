import React from 'react'
import HeaderPostPage from '../components/post-page-header'
import { connect } from 'react-redux'
import {set_value} from '../store/action/action.js'
import AddAPhotoSharpIcon from '@material-ui/icons/AddAPhotoSharp';





class Attributes extends React.Component{
    constructor(){
        super()
        this.state={
            img:"",
            name:"",
            price:'RS :',
            description:''
        }
    }


    

    handleChange=(event)=>{
    //    console.log(event.target.files[0].name)
       this.setState({
           [event.target.name] : event.target.value,
        //    img:event.target.files[0].name

        })
        // event.target.value = ''
    }
    handleImgChange=(event)=>{
    this.setState({
       img: URL.createObjectURL(event.target.files[0])
    })
    }
    
    
    render(){
        // console.log(this.state)


        // console.log(this.props)
        let {img , name , price , description} = this.state
        let math = Math.random()*10
        let floor = math.toFixed()
        let id = `${floor}-${name}-${price}`
        // console.log(math,floor)

        return(
            <div>
              <div>
                <HeaderPostPage />

              </div>
              <div className='new_post_detail_div'>
                  <div className='select_category_div'>
                      <h3>Select category</h3>
                      <p className='category_name'>Mobile ,  car</p>
                  </div>
                  <hr/>
                  <div className='inclued_detail_div'>
                      <h3>Include Some Details</h3>
                  </div>
                  <div className='title_inp_div'>
                      <p className='title_para'>ad title *</p>
                      <input id='title' onChange={(event)=>this.handleChange(event)} className='title_inp' type="text" name="name" />
                      <p className='title_define_para'>Mention the key features of your item (e.g. brand, model, age, type)0 / 70</p>
                  </div>
                  <div className='ad_description_div'>
                      <p className='ad_description_para'>Ad description</p>
                      {/* <textarea className='ad_description_inp' type="text" name="description" /> */}
                      <textarea onChange={(event)=>this.handleChange(event)} className='ad_description_inp' name="description" id="" cols="30" rows='5'></textarea>
                      <p className='ad_description_details'>Include condition, features and reason for selling 0 / 4096</p>
                  </div>
                  <div className='set_price_div'>
                      <h3 className='set_price_head'>Set A Price</h3>
                      <p className='set_price_para'>price</p>
                      <input onChange={(event)=>this.handleChange(event)} className='set_price_inp' type="number" name="price"  />
                  </div>
                  <hr/>
                  <div className='upload_img_div'>
                      <p className='upload_img_para'>image upload</p>
                     {/* {`<label for='img_add_icon> ${<AddAPhotoSharpIcon id='img_add_icon' />} </label>`} */}
                     <label htmlFor="img_add_icon">{<AddAPhotoSharpIcon className='add_img_icon' />}</label>
                     <input className='upload_img_inp' type='file'  onChange={(event)=>this.handleImgChange(event)}  name="img" id="img_add_icon"/>
                      
                  </div>
                  <hr/>
                  <div>
                     <button disabled={this.state.price.length<2 } className='postNow_btn' 
                     onClick={()=>this.props.set_value({id:id,img:img,price:'RS :'+price,name:name,description:description})}>post</button>
                  </div>
                  <br/>
                  <hr/>
              </div>


            </div>
        )
    }
}
// console.log(this.props.set_value)

const mapStateToProps =(state)=>({

    user: state.card
    
})

const mapDispatchToprops =(dispatch)=>({
    set_value : (data) => dispatch(set_value(data))
})



export default connect(mapStateToProps,mapDispatchToprops) (Attributes);
