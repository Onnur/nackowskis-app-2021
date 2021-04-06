import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NavLink } from 'react-router-dom';


const AuctionDetailView = () => {



    const { selectedAuction } = useContext(AuctionContext)
    return (
        <div>
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
            <NavLink to="/">Tillbaks</NavLink>
        </div>
    )
}

export default AuctionDetailView
