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
            <input type="text"
                onChange={(e) => {
                    setSearchVal(e.target.value)
                }} />
            <button onClick={search}>sök</button>
            {auctions.map(item =>
                <NavLink to="/auctiondetails">
                    <div className="auktion"
                        value={item}
                        key={item.AuktionID.toString()}
                        onClick={(e) => {
                            setSelectedAuction(item.AuktionID.toString())
                        }}
                    >
                        <p>{item.Titel}</p>
                        <p>{item.Beskrivning}</p>
                    </div>
                </NavLink>
            )
            }
        </div >
    )
}

export default Start



