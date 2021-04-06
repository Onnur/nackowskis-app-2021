import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const AuctionDetailView = () => {

    const { selectedAuction, removeAuction, selectedAuctionBids } = useContext(AuctionContext)
    return (
        <div className="auctionDetails">
            <br />
            <br />
            <p>Titel</p>
            <label>{selectedAuction.Titel}</label>
            <br />
            <p>Beskrivning</p>
            <label>{selectedAuction.Beskrivning}</label>

            <p>Utropspris</p>
            <label>{selectedAuction.Utropspris}</label>

            <p>Bud</p>
            {selectedAuctionBids.length > 0 ? (

                selectedAuctionBids.map((bid) =>

                    <p>{bid.Budgivare} {bid.Summa} kr</p>

                )) : (<>Inga bud än.</>)}


            <p>Slutdatum</p>
            <label>{selectedAuction.SlutDatum}</label>
            <br />

            <p>Skapad av</p>
            <label>{selectedAuction.SkapadAv}</label>
            <br />
            <br />
            <br />
            <button><NavLink to="/">Tillbaks</NavLink></button>
            <button>Lägg bud</button>
            <button onClick={removeAuction}>Radera auktion</button>

        </div>
    )
}

export default AuctionDetailView
