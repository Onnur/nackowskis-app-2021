import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'
import { useHistory } from 'react-router-dom';

const PlaceBidForm = () => {

    const { postBid, bid, setBid, setNameOfBuyer, highestBid, nameOfBuyer } = useContext(AuctionContext)
    const history = useHistory()

    const placeBid = () => {
        if (nameOfBuyer == "") {
            alert('Du måste fylla i alla fält')
        }
        else if (bid <= highestBid) {
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
                placeholder="Belopp"
                onChange={(e) => {
                    setBid(e.target.value)
                }}
            />
            <br />
            <button
                onClick={placeBid}
                type="submit"
            >Lägg bud</button>
        </div>
    )
}

export default PlaceBidForm
