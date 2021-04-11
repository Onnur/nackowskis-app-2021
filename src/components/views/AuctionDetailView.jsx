import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';
import PlaceBidForm from './PlaceBidForm'
import '../../App.css';


const AuctionDetailView = () => {

    const { selectedAuction, setSelectedAuction, removeAuction, selectedAuctionBids, highestBid } = useContext(AuctionContext)

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
                <h5>Vinnande bud: {highestBid} kr</h5>
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

            <h2>Slutdatum</h2>
            <label>{selectedAuction.SlutDatum}</label>
            <br />
            <h2>Skapad av</h2>
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
                <div>
                <button onClick={removeAuction}>Radera auktion</button>
                <br/>
                <button><NavLink to="/UpdateAuction"
                        value={selectedAuction}
                        key={selectedAuction.AuktionID}
                        onClick={() => { setSelectedAuction(selectedAuction) }}
                >Ändra auktion</NavLink></button>
                <br /><br />
                </div>
            ) : (<></>)}
        </div>
    )
}

export default AuctionDetailView
