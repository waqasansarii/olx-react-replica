import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Chat_comp from '../components/chat.page.comp'






class Chat_page extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Header />
                    <Menu />
                </div>
                    <Chat_comp />
            </div>
        )
    }
}


export default Chat_page