import React from 'react'
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'
import ToolsOffersSidebar from '../components/ToolsOffersSidebar'
function NewOffer() {
    return (
        <div>
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

        </div>
    )
}

export default NewOffer