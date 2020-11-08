import React from 'react'
import CardsItem from './freshCardItem'




class FreshCard extends React.Component{
    render(){
        return(
            <div>
                <div className='freshCard_header_div'>

                  <h2>Freash Recomendation</h2>

                </div>
                <div>
                    <CardsItem />
                </div>

            </div>
        )
    }
}

export default FreshCard