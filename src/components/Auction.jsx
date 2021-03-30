import React from 'react';
import { AuctionContext } from '../../contexts/AuctionContextProvider'

const Auction = () => {

    var newAuction = {
        "AuktionID": 0,
        "Titel": "Guernica av Picasso",
        "Beskrivning": "Tavla från 1937, olja på duk",
        "StartDatum": "2018-03-24T00:00:00",
        "SlutDatum": "2019-04-30T00:00:00",
        "Gruppkod": 2340,
        "Utropspris": 25000,
        "SkapadAv": ""
   }


    return(newAuction);
}

export default Auction;
