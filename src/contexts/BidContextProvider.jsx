import React, { createContext, useState, useEffect } from 'react'

export const BidContext = createContext()

const BidContextProvider = (props) => {

    const [bids, setBids] = useState([])

    const url = 'http://nackowskis.azurewebsites.net/api/bud/2340/'

    useEffect(() => {


    })


    return (
        <BidContext.Provider value={{}}>
            {props.children}
        </BidContext.Provider>
    )
}


export default BidContextProvider