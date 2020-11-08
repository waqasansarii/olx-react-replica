import React from 'react'
import './chat.css'
import SearchIcon from '@material-ui/icons/Search';



class Chat_comp extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='list_div'>
                   <div className='headd_div'>
                       <h2 className='head'>INBOX</h2>
                       <SearchIcon />
                   </div>
                   
                </div>
                <div className='chating_div' >
                </div>
            </div>
        )
    }
}

export default Chat_comp