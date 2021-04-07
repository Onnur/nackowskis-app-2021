import React, { useContext } from 'react'
import { AuctionContext } from '../../contexts/AuctionContextProvider'

const Search = (props) => {

    const searchTerm = props.location.state.searchTerm.toLowerCase();
    const { auctions } = useContext(AuctionContext);
    console.log(auctions);
    const auctions2 = auctions.filter(item => item.Titel.toLowerCase().includes(searchTerm));
    console.log(auctions2);

    return (
        <div>
            {auctions2.map(item =>
                <div>
                    <p>{item.Titel}</p>
                    <p>{item.Beskrivning}</p>
                </div>
            )}
        </div>
    )
}

export default Search
