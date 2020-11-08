import React from 'react';
import Olx_logo from '../images/Logo_OLX.png'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { facebook_login, log_out } from '../store/action/action'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { connect } from 'react-redux'
import '../App.css'
import firebase from '../firebaseConfig/firebase'




class Header extends React.Component {

    constructor() {
        super()

        this.state = {
            modalActive: false,
            show:false,
            logIn:false,
            name:'',
            photo:''


        }
    }

    onOpenModal = () => {
        this.setState({
            modalActive: !this.state.modalActive
        })
    }
    onCloseModal = () => {
        this.setState({
            modalActive: !this.state.modalActive
        })
    }

    handleShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }

componentDidMount=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({
                logIn:true,
                show:false,
                name:user.displayName,
                photo:user.photoURL
            })
        }else{
            // console.log('user log out')
            this.setState({
                logIn:false
            })
        }
    })
}




    render() {
        // console.log(this.props.app_user.users.img)
        // console.log(this.props.log_out)
        // console.log(this.state.logIn)
        // console.log(this.state.name)
        // console.log(this.state.photo)




        let styleIcon = {
            'color': 'white',
            'marginTop': '3px'
            // 'background-color': 'black'
        };

        return (
            <div className='main_div'>
                <div className='second_div'>
                    <div className='olx_logo_div'>
                        <Link to='/'>
                            <img width='50' src={Olx_logo} alt="" />

                        </Link>
                    </div>
                    <div className='location_search_div'>
                        <input className='search_input' placeholder='search city' type="text" />
                    </div>

                    <div className="products_search_div">
                        <input className='products_srch_inp' placeholder='search products' type="text" />
                    </div>
                    <div className='products_srchBtn_div'>

                        <div className='srchIcon'>
                            <SearchIcon style={styleIcon} />

                        </div>
                    </div>
                    {
                        // this.props.app_user.users == '' ?
                        this.state.logIn===false?

                            <div className='login_btn_div' >
                                <button className='loginBtn' onClick={this.onOpenModal}>Login</button>
                            </div>
                            :
                            <div className='log_out_div' >
                                <Link to='/chat' className='chat_link'>
                                  <ChatBubbleIcon className='chat_icon' />
                                </Link> 
                                <img className='user_img' width='50px' src={this.state.photo} alt="" />
                                <ExpandMoreIcon onClick={()=>this.handleShow()} />
                              { this.state.show?

                               <button className='log_outBtn' onClick={() => this.props.log_out()}>Log out</button> 
                               :null
                              }  
                            </div>
                    }
                    <div className='products_sell_btn_div'>
                        <Link to='/post'>

                            <button className='sellBtn'><span>{<AddIcon />}</span> sell</button>

                        </Link>
                    </div>
                </div>
                {
                // this.props.app_user.users == ''  ?
                this.state.logIn===false?

                    <Modal isOpen={  this.state.modalActive}  onRequestClose={ this.onCloseModal }
                        className='Modal'>
                        <div className='closeBtn_div'>

                            <span className='closeBtn'>
                                <CloseIcon className='closeBtn' onClick={this.onCloseModal} />

                            </span>
                        </div>

                        <div>
                            <button onClick={() => this.props.facebookLogin()} className='account_active_btns'>continue with Google</button>
                        </div>
                        <div className='modal_para'>
                            <p>We won't share your personal details with anyone</p>
                            <p>If you continue, you are accepting OLX Terms and Conditions and Privacy Policy</p>
                        </div>
                    </Modal> 

                    

                    :null

                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    app_user: state.auth_users
})


const mapDispatchToProps = (dispatch) => ({
    facebookLogin: () => dispatch(facebook_login()),
    log_out: () => dispatch(log_out())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);