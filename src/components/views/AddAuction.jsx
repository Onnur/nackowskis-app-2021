import React from 'react';

const AddAuction = () => {

    return (<>
    
        <h3>Lägg till ny auktion</h3>

        <label>Titel</label><br />
        <input type="text" /><br />
        <label>Beskrivning</label><br />
        <input type="text" /><br />
        <label>Startdatum</label><br />
        <input type="date"/><br />
        <label>Slutdatum</label><br />
        <input type="date"/><br />
        <label>Utropspris</label><br />
        <input type="text" /><br />
        <br /><br />
        <button onClick="">Lägg till auktion</button>
    </>)

}

export default AddAuction;