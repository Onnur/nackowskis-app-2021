    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2340/0'
    const urlDelete = 'http://nackowskis.azurewebsites.net/api/Auktion/2340'

    const post = () => {

        const auktion = {
            "AuktionID": 0,
            "Titel": "Guernica av Picasso",
            "Beskrivning": "Tavla från 1937, olja på duk",
            "StartDatum": "2018-03-24T00:00:00",
            "SlutDatum": "2019-04-30T00:00:00",
            "Gruppkod": 2340,
            "Utropspris": 25000,
            "SkapadAv": ""
        }


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(auktion),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log('Request success: ', 'posten skapad');
            console.log(data)
        })
    }



    function remove(event) {
        event.preventDefault()
        var id = 5330
        fetch(urlDelete + "/" + id, {
            method: 'DELETE'
        })
    }



