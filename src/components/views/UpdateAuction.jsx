import React, { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'

const UpdateAuction = () => {

    const { selectedAuction, setTitle, setDescription, setEndDate, updateAuction } = useContext(AuctionContext)

    return (<div className="newAuction">

        <h3>Ändra auktion</h3>
        
        <div className="title">
            <label html for="title">Titel:</label><br />
            <input type="text" placeholder = {selectedAuction.Titel} onChange={(e) => {
                setTitle(e.target.value)
            }} />
        </div>
        <div className="description">
            <label html for="description">Beskrivning:</label><br />
            <input type="text" value={selectedAuction.Beskrivning} onChange={(e) => {
                setDescription(e.target.value)
            }} /> 
        </div>
        <div className="dueDate">
            <label html for="dueDate">Slutdatum:</label><br />
            <input type="date" onChange={(e) => {
                setEndDate(e.target.value)
            }} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="createAuction">
            <button className="createAuctionbtn" type="submit" onClick={updateAuction}>Ändra</button>
        </div>
    </div>)
}

export default UpdateAuction;