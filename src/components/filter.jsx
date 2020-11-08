import React from 'react'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';




class FilterComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            categoryHide: true
        }
    }
    showHideIcon=()=>{
        this.setState({
            categoryHide: !this.state.categoryHide
        })
    }

    render() {
        let { categoryHide } = this.state

        const id = this.props.item
        const val = this.props.itemPath
        // console.log(id)
        // console.log(val)


        return (
            <div className='main_filter_div'>
                <div className='sub_filter_div'>
                    <h1 >{val ? 'Mobile Phones' : 'Cars'}</h1>
                    <h4 className='filter_head'>Filters </h4>
                    <br />
                    <hr />
                    <div className='category_menu'>
                        <div className='sub_category_menu'>
                            <h3 className='category_head' onClick={()=>this.showHideIcon()}>Category</h3>

                            {categoryHide ? <ExpandLessIcon onClick={()=>this.showHideIcon()} className='more_icon' /> : <ExpandMoreIcon className='more_icon' onClick={()=>this.showHideIcon()}/>}
                        </div>
                        {categoryHide ? 
                            <div  className='category_menu'>



                                {val ? <p className='filter' onClick={() => this.props.AllCategory()}>All catogery </p> : <p onClick={() => this.props.AllCategory()} className='filter'>All category</p>}
                                {val ? <p onClick={() => this.props.filterHandle()} className='filter'>nokia</p> : <p onClick={() => this.props.filterHandle()} className='filter'>alto</p>}

                            </div>
                            : null
                        }

                    </div>
                    <hr/>

                </div>
            </div>
        )
    }
}

export default FilterComponent;