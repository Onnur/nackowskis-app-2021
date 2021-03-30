import React, {useRef, useContext} from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'

const AddAuction = () => {

    const { post } = useContext(AuctionContext)

    const newAuction = {};
    newAuction.props.AuktionID = 0;
    newAuction.props.Titel = useRef();
    newAuction.props.Beskrivning = useRef();
    newAuction.props.StartDatum = useRef();
    newAuction.props.SlutDatum = useRef();
    newAuction.props.Gruppkod = 2340;
    newAuction.props.Utropspris = useRef();
    newAuction.props.SkapadAv = "";

    return (<>
    
        <h3>Lägg till ny auktion</h3>

        <label>Titel</label><br />
        <input type="text" ref={newAuction.props.Titel} /><br />
        <label>Beskrivning</label><br />
        <input type="text" ref={newAuction.props.Beskrivning} /><br />
        <label>Startdatum</label><br />
        <input type="date" ref={newAuction.props.StartDatum} /><br />
        <label>Slutdatum</label><br />
        <input type="date" ref={newAuction.props.SlutDatum} /><br />
        <label>Utropspris</label><br />
        <input type="text"  ref={newAuction.props.Utropspris} /><br />
        <br /><br />
        <button onClick={post(newAuction)}>Lägg till auktion</button>
    </>)
}

export default AddAuction;