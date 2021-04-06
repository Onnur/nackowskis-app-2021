import React, { createContext, useState, useEffect } from 'react'

export const AuctionContext = createContext()

const AuctionContextProvider = (props) => {

    const [auctions, setAuctions] = useState([])
    const [selectedAuction, setSelectedAuction] = useState("")
    const [searchVal, setSearchVal] = useState("")

    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/'

    useEffect(() => {

        const getProducts = () => {

            fetch(url)
                .then(response => response.json())
                .then(data => setAuctions(data))
        }

        getProducts()

    }, [])


    const search = () => {

        fetch(url)
            .then(response => response.json())
            .then((result) => {

                const filteredList = result.filter(a => a.Titel.toLowerCase().includes(searchVal.toLowerCase()))
                setAuctions(filteredList)
            })
    }


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

    const removeAuction = () => {

        console.log(selectedAuction.AuktionID)

        fetch(url + selectedAuction.AuktionID, {
            method: 'DELETE',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            }
        })
    }


    return (
        <AuctionContext.Provider value={{ auctions, setAuctions, removeAuction, post, setSelectedAuction, selectedAuction, search, setSearchVal }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider
