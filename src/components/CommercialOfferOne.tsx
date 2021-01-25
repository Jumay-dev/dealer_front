import React from 'react'
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'

function CommercialOfferOne({ offers }) {
    return (
        <React.Fragment>
            <CommercialOfferPositionMain primary={true} tool={offers}/>
            {offers.children ? offers.children.map( child => <CommercialOfferPositionMain tool={child} primary={false}/>) : null}
        </React.Fragment>
    )
}

export default CommercialOfferOne