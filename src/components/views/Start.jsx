import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const Start = () => {

    const { auctions, setSelectedAuction } = useContext(AuctionContext)

    return (
        <div className="auktioner">
            <br />
            <br />
            <h1>Välkommen till grupp 5 Nackowski!</h1>
            <br />
            <br />
            {auctions.map(item =>
                <NavLink to="/auctiondetails">
                    <div className="foundAuctions"
                        value={item}
                        key={item.AuktionID}
                        onClick={() => { setSelectedAuction(item) }}
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



