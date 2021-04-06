import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'




const Start = () => {

    const { auctions } = useContext(AuctionContext)

    return (
        <div className="auktioner">
            {auctions.map(item =>
                <div className="auktion">
                    <p>{item.Titel}</p>
                    <p>{item.Beskrivning}</p>
                </div>
            )}
        </div>
    )
}

export default Start
