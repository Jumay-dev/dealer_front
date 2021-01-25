import React from 'react'
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'

function CommercialOfferOne({ offers, deleteTool }) {
    return (
        <React.Fragment>
            <CommercialOfferPositionMain primary={true} tool={offers} deleteTool={deleteTool}/>
            {offers.children ? offers.children.map( child => <CommercialOfferPositionMain tool={child} primary={false} deleteTool={deleteTool}/>) : null}
        </React.Fragment>
    )
}

export default CommercialOfferOne