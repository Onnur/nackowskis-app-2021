import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { NewAuctionContext } from '../../contexts/NewAuctionContextProvider'

const AddAuction = () => {

    const { post } = useContext(AuctionContext)
    const { setTitle, setDescription, setStartDate, setEndDate, setStartPrice } = useContext(NewAuctionContext)

    const postAuction = () => {



    }


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
        <input type="date" onChange={(e) => {
            setStartDate(e.target.value)
        }} />
        <br />
        <label>Slutdatum</label><br />
        <input type="date" onChange={(e) => {
            setEndDate(e.target.value)
        }} />
        <br />
        <label>Utropspris</label><br />
        <input type="number" onChange={(e) => {
            setStartPrice(e.target.value)
        }} />
        <br />
        <br /><br />
        <button onClick={postAuction}>Lägg till auktion</button>
    </div>)
}

export default AddAuction;