import React from 'react'
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'
import ToolsOffersSidebar from '../components/ToolsOffersSidebar'
function NewOffer() {
    return (
        <>
            <ToolsOffersSidebar>
                <CommercialOfferPositionMain 
                    primary={true}
                />
                <CommercialOfferPositionMain />
                <CommercialOfferPositionMain 
                    primary={true}
                />
                <CommercialOfferPositionMain />
                <CommercialOfferPositionMain />
                </ToolsOffersSidebar>

        </>
    )
}

export default NewOffer