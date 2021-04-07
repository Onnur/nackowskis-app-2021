import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const AuctionDetailView = () => {

    const { selectedAuction, removeAuction, selectedAuctionBids } = useContext(AuctionContext)
    return (
        <div className="chosenBidView">
            <h2>Titel:</h2>
            <label>{selectedAuction.Titel}</label>
            <br />
            <h2>Beskrivning:</h2>
            <label>{selectedAuction.Beskrivning}</label>

            <h2>Utropspris:</h2>
            <label>{selectedAuction.Utropspris}</label>

            <h2>Bud:</h2>
            {selectedAuctionBids.length > 0 ? (

                selectedAuctionBids.map((bid) =>

                    <p>{bid.Budgivare} {bid.Summa} kr</p>

                )) : (<>Inga bud än.</>)}


            <h2>Slutdatum:</h2>
            <label>{selectedAuction.SlutDatum.replace('T', ' ')}</label>
            <br />

            <h2>Skapad av:</h2>
            <label>{selectedAuction.SkapadAv}</label>
            <br />
            <br />
            <br />
            <button><NavLink to="/">Tillbaka</NavLink></button>
            <button>Lägg bud</button>
            <button onClick={removeAuction}>Radera auktion</button>
            </div>
    )
}

export default AuctionDetailView
