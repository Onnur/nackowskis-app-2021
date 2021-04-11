import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';

export const NewAuctionContext = createContext()

const NewAuctionContextProvider = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startPrice, setStartPrice] = useState()
    const [sellerName, setSellerName] = useState("")

    const history = useHistory()

    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/'

    const post = () => {

        if (title == "" || description == "" || startDate == "" || endDate == "" || sellerName == "" || description == "") {
            alert('Vänligen fyll i alla fält')
        }
        else {
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
                    SkapadAv: sellerName
                }),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(function (data) {
                alert('Auktion skapad!')
                history.push('/')
            })
        }
    }

    return (
        <NewAuctionContext.Provider value={{ setTitle, setDescription, setStartDate, setStartPrice, setSellerName, setEndDate, post }}>
            {props.children}
        </NewAuctionContext.Provider>
    )
}

export default NewAuctionContextProvider

