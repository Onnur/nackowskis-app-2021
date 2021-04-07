import React, { createContext, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom';

export const AuctionContext = createContext()

const AuctionContextProvider = (props) => {

    const [auctions, setAuctions] = useState([])
    const [selectedAuction, setSelectedAuction] = useState("")
    const [searchVal, setSearchVal] = useState("")
    const [selectedAuctionBids, setSelectedAuctionBids] = useState("")
    const [highestBid, setHighestBid] = useState(0)
    const [bid, setBid] = useState()
    const [nameOfBuyer, setNameOfBuyer] = useState("")

    const history = useHistory()

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

        async function fetchBids() {

            const response = await fetch(budUrl + selectedAuction.AuktionID)
            const bids = await response.json()

            setSelectedAuctionBids([])
            setHighestBid(selectedAuction.Utropspris)

            if (bids.length > 0) {
                bids.sort((a, b) => b.Summa - a.Summa)
                setSelectedAuctionBids(bids)
                setHighestBid(bids[0].Summa)
            }
        }

        fetchBids()

    }, [selectedAuction])



    const search = () => {

        fetch(url)
            .then(response => response.json())
            .then((result) => {

                const filteredList = result.filter(a => a.Titel.toLowerCase().includes(searchVal.toLowerCase()))
                setAuctions(filteredList)
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

            alert('auktion raderad!')
            history.push('/')
        }
        else {
            alert('Det finns redan bud på denna auktion och går därför inte att radera.')
        }

    }

    const postBid = () => {

        fetch(budUrl + "0", {
            method: 'POST',
            body: JSON.stringify({
                BudID: null,
                Summa: bid,
                AuktionID: selectedAuction.AuktionID,
                Budgivare: nameOfBuyer
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log('Request success: ', 'budet skapat');
        })

    }


    return (
        <AuctionContext.Provider value={{ postBid, bid, setBid, setNameOfBuyer, selectedAuctionBids, auctions, setAuctions, removeAuction, setSelectedAuction, selectedAuction, search, setSearchVal, highestBid }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider
