import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const AuctionDetailView = () => {

    const { selectedAuction, removeAuction, selectedAuctionBids } = useContext(AuctionContext)
    return (
        <div className="chosenBidView">
            <br />
            <br />
            <h1>Titel</h1>
            <label>{selectedAuction.Titel}</label>
            <br />
            <h1>Beskrivning</h1>
            <label>{selectedAuction.Beskrivning}</label>

            <h1>Utropspris</h1>
            <label>{selectedAuction.Utropspris}</label>

            <h1>Bud</h1>
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
