import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'




const Start = () => {

    const { auctions, setSelectedAuction } = useContext(AuctionContext)

    const showDetails = (e) => {

        e.preventDefault()
        console.log("selected auctionID: " + e.target.value)

    }

    return (
        <div className="auktioner">
            {auctions.map(item =>
                <div className="auktion"
                    onClick={showDetails(item.AuktionID)}
                    key={item.AuktionID}>

                    <p>{item.Titel}</p>
                    <p>{item.Beskrivning}</p>
                </div>
            )}
        </div>
    )
}

export default Start



