import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const Start = () => {

    const { auctions, setSelectedAuction, search, setSearchVal } = useContext(AuctionContext)


    return (
        <div className="auktioner">
            <br />
            <br />
            <br />
            <br />
            {auctions.map(item =>
                <NavLink to="/auctiondetails">
                    <div className="foundAuctions"
                        value={item}
                        key={item.AuktionID}
                        onClick={(e) => {
                            setSelectedAuction(item)
                        }}
                    >
                        <h2>{item.Titel}</h2>
                        <p>Slutar: {item.SlutDatum.replace('T', ' ')}</p>
                        <h5>Utropspris: {item.Utropspris}</h5>
                        <h5>Beskrivning: {item.Beskrivning}</h5>
                    </div>
                </NavLink>
            )
            }
        </div >
    )
}

export default Start



