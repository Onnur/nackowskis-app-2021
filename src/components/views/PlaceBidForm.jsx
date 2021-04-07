import React, { useState } from 'react'

const PlaceBidForm = ({ highestBid }) => {

    const [bidToPlace, setBidToPlace] = useState(0)

    const placeBid = () => {


        console.log(highestBid)
        if (bidToPlace < highestBid) {
            alert('du måste lägga ett högre bud')
        }
        else {
            alert('bud lagt!')
        }
    }



    const visa = () => {
        console.log(highestBid)
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Amount"
                onChange={(e) => {
                    setBidToPlace(e.target.value)
                }}
            />
            <br />
            <button
                onClick={placeBid}
            >Place bid</button>
            <button onClick={visa}>logga högsta budet</button>

        </div>
    )
}

export default PlaceBidForm
