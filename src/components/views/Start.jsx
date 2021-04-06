import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'




const Start = () => {

    const { auctions } = useContext(AuctionContext)

    return (
        <div className="auktion">
            {auctions.map(item =>
                <div>
                    <p>{item.Titel}</p>
                    <p>{item.Beskrivning}</p>
                </div>
            )}
        </div>
    )
}

export default Start
