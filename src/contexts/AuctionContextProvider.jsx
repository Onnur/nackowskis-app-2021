import React, { createContext, useState, useEffect } from 'react'

export const AuctionContext = createContext()

const AuctionContextProvider = (props) => {

    const [auctions, setAuctions] = useState([])


    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/'
    const urlDelete = 'http://nackowskis.azurewebsites.net/api/Auktion/2340'
    //daadw
    useEffect(() => {

        const getProducts = () => {

            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(function (data) {
                console.log('Request success: ', 'posten skapad');
                console.log(data)
                setAuctions(...auctions, data)
            })
        }

        getProducts()

    }, [])

    const post = (auction) => {

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
    }

    function removeAuction(event) {
        event.preventDefault()
        var id = 5330
        fetch(urlDelete + "/" + id, {
            method: 'DELETE'
        })
    }


    return (
        <AuctionContext.Provider value={{ auctions, setAuctions }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider
