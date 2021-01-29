import React from 'react'
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'

function CommercialOfferOne({ offers, deleteTool, addedTools, setAddedTools }) {
    return (
        <React.Fragment key={offers.id}>
            <CommercialOfferPositionMain 
                primary={true} 
                tool={offers} 
                deleteTool={deleteTool}
                addedTools={addedTools} 
                setAddedTools={setAddedTools}
            />
            {offers.children ? offers.children.map( child => 
            <CommercialOfferPositionMain 
                tool={child} 
                primary={false} 
                deleteTool={deleteTool} 
                addedTools={addedTools} 
                setAddedTools={setAddedTools}
                />) : null}
        </React.Fragment>
    )
}

export default CommercialOfferOne