import React from 'react '
import MobAppImg from '../images/mob-img-1.jpg'
import './mobApp.css'


class MobApp extends React.Component{
    render(){
        return(
            <div className='main_mobApp_div'>
                <div className='sub_mobApp_div'>
                    <img src={MobAppImg}  />

                </div>
            </div>
        )
    }
}


export default MobApp;