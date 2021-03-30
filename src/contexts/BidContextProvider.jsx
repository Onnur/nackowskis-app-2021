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

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bid),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log('Request success: ', 'posten skapad');
            console.log(data)
        })

        return (
            <BidContext.Provider value={{ bids, setBids, getBids, postBid }}>
                {props.children}
            </BidContext.Provider>
        )
    }
}

export default BidContextProvider