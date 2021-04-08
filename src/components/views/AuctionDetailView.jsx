import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';
import PlaceBidForm from './PlaceBidForm'


const AuctionDetailView = () => {

    const { selectedAuction, removeAuction, selectedAuctionBids, highestBid } = useContext(AuctionContext)

    return (
        <div className="chosenBidView">
            <h2>Titel:</h2>
            <label>{selectedAuction.Titel}</label>
            <br />
            <h2>Beskrivning:</h2>
            <label>{selectedAuction.Beskrivning}</label>

            <h2>Utropspris:</h2>
            <label>{selectedAuction.Utropspris}</label>

            {selectedAuction.SlutDatum < new Date().toLocaleString() ? (
                <p>Vinnande bud: {highestBid}</p>
            )  
            :selectedAuction.SlutDatum > new Date().toLocaleDateString() ? (
            <div>
            <h2>Bud:</h2>
            {selectedAuctionBids.length > 0 ? (

                selectedAuctionBids.map((bid) =>

                    <p>{bid.Budgivare} {bid.Summa} kr</p>

                )) :
                (<>Inga bud än.</>)}
            </div>
            )
            : (<></>)}

            <p>Slutdatum</p>
            <label>{selectedAuction.SlutDatum}</label>
            <br />
            <p>Skapad av</p>
            <label>{selectedAuction.SkapadAv}</label>
            <br />
            <br />
            <br />

            {selectedAuction.SlutDatum > new Date().toLocaleString() ? (
                <PlaceBidForm highestBid={highestBid} />
            ) 
            : (<></>)}
            
            <button><NavLink to="/">Tillbaka</NavLink></button>
            <br /><br />
            
            {selectedAuctionBids.length < 1 ? (
                <button onClick={removeAuction}>Radera auktion</button>
            ) : (<></>)}
        </div>
    )
}

export default AuctionDetailView
