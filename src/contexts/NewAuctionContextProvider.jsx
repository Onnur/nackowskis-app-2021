import React, { createContext, useState } from 'react'

export const NewAuctionContext = createContext()

const NewAuctionContextProvider = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startPrice, setStartPrice] = useState()
    const [sellerName, setSellerName] = useState("")





    return (
        <NewAuctionContext.Provider value={{ title, setTitle, description, setDescription, startDate, setStartDate, startPrice, setStartPrice, sellerName, setSellerName, endDate, setEndDate }}>
            {props.children}
        </NewAuctionContext.Provider>
    )
}

export default NewAuctionContextProvider
