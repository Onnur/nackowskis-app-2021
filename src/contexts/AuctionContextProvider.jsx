import React, { createContext, useState, useEffect } from 'react'

export const AuctionContext = createContext()

const AuctionContextProvider = (props) => {

    const [auctions, setAuctions] = useState([])
    const [selectedAuction, setSelectedAuction] = useState("")
    const [searchVal, setSearchVal] = useState("")
    const [selectedAuctionBids, setSelectedAuctionBids] = useState("")
    const [highestBid, setHighestBid] = useState(0)

    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/'
    const budUrl = 'http://nackowskis.azurewebsites.net/api/bud/2340/'

    useEffect(() => {

        const getProducts = () => {

            fetch(url)
                .then(response => response.json())
                .then(data => setAuctions(data))
        }

        getProducts()

    }, [])


    // Varje gång man går in i detaljerad vy så hämtas alla bud för den valda auktionen
    useEffect(() => {

        if (selectedAuction != "") {

            fetch(budUrl + selectedAuction.AuktionID)
                .then(response => response.json())
                .then((result) => {

                    result.sort((a, b) => b.Summa - a.Summa)
                    setSelectedAuctionBids(result)
                })

            getHighestBid()
        }
    }, [selectedAuction])


    const getHighestBid = () => {

        setHighestBid(selectedAuction.Utropspris)
        console.log('bids: ' + JSON.stringify(selectedAuctionBids))

        if (selectedAuctionBids.length > 0) {
            setHighestBid(selectedAuctionBids[0].Summa)
            console.log('bids: ' + JSON.stringify(selectedAuctionBids))
        }

    }


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

        if (selectedAuctionBids.length < 1) {
            fetch(url + selectedAuction.AuktionID, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                }
            })
        }
        else {
            alert('Det finns redan bud på denna auktion och går därför inte att radera.')
        }

    }


    return (
        <AuctionContext.Provider value={{ selectedAuctionBids, auctions, setAuctions, removeAuction, post, setSelectedAuction, selectedAuction, search, setSearchVal, highestBid }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider
