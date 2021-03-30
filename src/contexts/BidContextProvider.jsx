import React, { createContext, useState, useEffect } from 'react'

export const BidContext = createContext()

const BidContextProvider = (props) => {

    const [bids, setBids] = useState([])

    const url = 'http://nackowskis.azurewebsites.net/api/bud/2340/'

    useEffect(() => {

        const getBids = (auctionId) => {

            fetch(url + '/' + auctionId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(function (data) {
                console.log(data)
                setBids(bids)
            })
        }

        getBids()

    }, [])

    const postBid = (bid) => {

        // const auktion = {
        //     "AuktionID": 0,
        //     "Titel": "Guernica av Picasso",
        //     "Beskrivning": "Tavla från 1937, olja på duk",
        //     "StartDatum": "2018-03-24T00:00:00",
        //     "SlutDatum": "2019-04-30T00:00:00",
        //     "Gruppkod": 2340,
        //     "Utropspris": 25000,
        //     "SkapadAv": ""
        // }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(auction),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log('Request success: ', 'posten skapad');
            console.log(data)
        })



        return (
            <BidContext.Provider value={{ bids, setBids, postBid }}>
                {props.children}
            </BidContext.Provider>
        )
    }
}

export default BidContextProvider