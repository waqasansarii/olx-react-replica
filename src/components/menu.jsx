import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MobilePage from '../navbar/mobile.jsx'
import CarsPage from '../navbar/cars'
// import { BorderAllOutlined } from '@material-ui/icons';
import CatagoriesMenu from './catagoriesMenu'
import './menu.css'



class Menu extends Component {

    constructor(){
        super()
        this.state={
            show : false
        }
    }

    show_catagorie_menu=()=>{
        // this.state.show=true
        this.setState({
            show : this.state
        })
    }

    hide_catagorie_menu=()=>{
    //    this.state.show = !true;
    //    console.log("hide kro")
       this.setState({
           show: !this.state
       })
    }


    render() {

        const AllCategories = {
            // border: '2px',
            // background: 'none',
            marginLeft: '30px',
            fontSize: '1.2em',
            marginTop: '5px',
            cursor :"pointer"

        }
        const downIcon = {
            // border: '2px',
            background: 'none',
            fontSize: '1em',
            width: '40px',
            height: '35px',
            cursor :"pointer"
           
        }
        const downIconSpan = {
            marginTop: '3px',
        }

        const subDiv = {
            display: 'flex',
            flexDirection: 'row'
        }
        
        return (
            <div className='menu_main_div'  >
                <div className='sub_div' style={subDiv} >
                    
                    <div style={AllCategories} onClick={this.state.show ? this.hide_catagorie_menu:this.show_catagorie_menu}  >All categories</div>
                    <div style={downIconSpan}  >
                        {this.state.show ?
                         <ExpandLessIcon style={downIcon} onClick={this.hide_catagorie_menu} />
                         :
                        <ExpandMoreIcon style={downIcon} onClick={this.show_catagorie_menu} />}
                    </div>
                    <div className='mobile_page_div'>
                    <MobilePage  />    
                    </div> 
                    <div className='car_page_div'>
                        <CarsPage  />
                    </div>
                </div>
                    {this.state.show ? <CatagoriesMenu /> : null}

            </div>
        )
    }
}

export default Menu;