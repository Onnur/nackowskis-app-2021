import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NewAuctionContext } from '../../contexts/NewAuctionContextProvider'

const AddAuction = () => {

    const { post } = useContext(AuctionContext)
    const { title, setTitle, description, setDescription, startDate, setStartDate, endDate, setEndDate, startPrice, setStartPrice } = useContext(NewAuctionContext)




    return (<div className="newAuction">

        <h3>Lägg till ny auktion</h3>

        <label>Titel</label><br />
        <input type="text" onChange={(e) => {
            setTitle(e.target.value)
        }} />
        <br />
        <label>Beskrivning</label><br />
        <input type="text" onChange={(e) => {
            setDescription(e.target.value)
        }} />
        <br />
        <label>Startdatum</label><br />
        <input type="text" />
        <br />
        <label>Slutdatum</label><br />
        <input type="text" />
        <br />
        <label>Utropspris</label><br />
        <input type="text" onChange={(e) => {
            setStartPrice(e.target.value)
        }} />
        <br />
        <br /><br />
        <button>Lägg till auktion</button>
    </div>)
}

export default AddAuction;