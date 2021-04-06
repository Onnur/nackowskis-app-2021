import React, { createContext, useState, useEffect } from 'react'

export const AuctionContext = createContext()

const AuctionContextProvider = (props) => {

    const [auctions, setAuctions] = useState([])
    const [selectedAuction, setSelectedAuction] = useState("")

    const urlDelete = 'http://nackowskis.azurewebsites.net/api/Auktion/2340'
    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/'

    useEffect(() => {

        const getProducts = () => {

            fetch(url)
                .then(response => response.json())
                .then(data => setAuctions(data))
        }

        getProducts()

    }, [])

    const post = (auction) => {

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

    function removeAuction(id) {
        var id = 5330
        fetch(urlDelete + "/" + id, {
            method: 'DELETE'
        })
    }


    return (
        <AuctionContext.Provider value={{ auctions, setAuctions, removeAuction, post, setSelectedAuction, selectedAuction }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider
