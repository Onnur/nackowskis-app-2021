import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'


const AuctionDetailView = () => {



    const { selectedAuction } = useContext(AuctionContext)
    return (
        <div>
            <br />
            <br />
            <p>{selectedAuction.Titel}</p>
            <br />
            <br />
            details
        </div>
    )
}

export default AuctionDetailView
