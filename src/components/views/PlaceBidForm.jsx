import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { useHistory } from 'react-router-dom';

const PlaceBidForm = () => {

    const { postBid, bid, setBid, setNameOfBuyer, highestBid } = useContext(AuctionContext)
    const history = useHistory()

    const placeBid = () => {

        if (bid <= highestBid) {
            alert('du måste lägga ett högre bud')
        }
        else {
            postBid()
            alert('Du har nu ledande budet på ' + bid + " kr")
            history.push('/')
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Namn"
                onChange={(e) => {
                    setNameOfBuyer(e.target.value)
                }}
            />
            <input
                type="number"
                placeholder="Amount"
                onChange={(e) => {
                    setBid(e.target.value)
                }}
            />
            <br />
            <button
                onClick={placeBid}
                type="submit"
            >Place bid</button>
        </div>
    )
}

export default PlaceBidForm
