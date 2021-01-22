import React from 'react'
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'

function NewOffer() {
    return (
        <>
            <CommercialOfferPositionMain 
                primary={true}
            />
            <CommercialOfferPositionMain />
            <CommercialOfferPositionMain 
                primary={true}
            />
            <CommercialOfferPositionMain />
            <CommercialOfferPositionMain />
        </>
    )
}

export default NewOffer