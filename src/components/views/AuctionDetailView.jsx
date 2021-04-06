import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const AuctionDetailView = () => {

    const { selectedAuction, removeAuction } = useContext(AuctionContext)
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

            <p>Högsta bud</p>
            <label>sätt in högsta bud här</label>

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
