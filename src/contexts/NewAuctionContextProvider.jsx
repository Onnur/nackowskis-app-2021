import React, { createContext, useState } from 'react'

export const NewAuctionContext = createContext()

const NewAuctionContextProvider = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startPrice, setStartPrice] = useState()
    const [sellerName, setSellerName] = useState("")

    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/'

    const post = () => {

        console.log(sellerName)
        console.log(endDate)
        console.log(startDate)


        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                AuktionID: null,
                Titel: title,
                Beskrivning: description,
                StartDatum: new Date(),
                SlutDatum: endDate,
                Gruppkod: 2340,
                Utropspris: startPrice,
                SkapadAv: "test"
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log('Request success: ', 'posten skapad');
            console.log(data)
        })
    }



    return (
        <NewAuctionContext.Provider value={{ setTitle, setDescription, setStartDate, setStartPrice, setSellerName, setEndDate, post }}>
            {props.children}
        </NewAuctionContext.Provider>
    )
}

export default NewAuctionContextProvider

