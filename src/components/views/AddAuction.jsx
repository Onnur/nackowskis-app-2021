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
        <div className="title">
        <label html for="title">Titel:</label><br />
        <input type="text" onChange={(e) => {
            setTitle(e.target.value)
            
        }} />
        </div>
        <br />
        <div className="description">
        <label html for="description">Beskrivning:</label><br />
        <input type="text" onChange={(e) => {
            setDescription(e.target.value)
        }} />
        </div>
        <br />
        <div className="startDate">
        <label html for="startDate">Startdatum:</label><br />
        <input type="date" onChange={(e) => {
            setStartDate(e.target.value)
        }} />
        </div>
        <br />
        <div className="dueDate">
        <label html for="dueDate">Slutdatum:</label><br />
        <input type="date" onChange={(e) => {
            setEndDate(e.target.value)
        }} />
        </div>
        <br />
        <div className="acceptedPrice">
        <label html for="acceptedPrice">Utropspris:</label><br />
        <input type="number" onChange={(e) => {
            setStartPrice(e.target.value)
        }} />
        </div>
        <br />
        <br /><br />
        <div className="createAuction">
        <button className="createAuctionbtn" type="submit" onClick={postAuction}>Lägg till auktion</button>
        </div>
    </div>)
}

export default AddAuction;