import React from 'react'
import Imgcom from '../components/image'
import Card from '../components/cards'
import FreshCard from '../components/freshCard'
import Header from '../components/header'
import Menu from '../components/menu.jsx'

import Footer from '../components/Footer'




class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Menu />
                <Imgcom />
                <Card />
                <FreshCard />
                <Footer />

                
            </div>
        )
    }
}

export default HomePage;