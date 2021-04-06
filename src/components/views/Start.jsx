import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'


const Start = () => {

    const { auctions, setSelectedAuction, search, setSearchVal } = useContext(AuctionContext)


    return (
        <div className="auktioner">
            <br />
            <br />
            <br />
            <br />
            <input type="text"
                onChange={(e) => {
                    setSearchVal(e.target.value)
                }} />
            <button onClick={search}>sök</button>
            {auctions.map(item =>
                <div className="auktion"
                    key={item.AuktionID}>
                    <p>{item.Titel}</p>
                    <p>{item.Beskrivning}</p>
                </div>
            )}
        </div>
    )
}

export default Start



