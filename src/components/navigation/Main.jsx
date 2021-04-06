import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from '../views/Start';
import AddAuction from '../views/AddAuction';
<<<<<<< HEAD
import Search from '../views/Search';
=======
import AuctionDetails from '../views/AuctionDetailView'
>>>>>>> 042abffb372cb58c6f99c365c7cacb431ea31ee7

const Main = () => {
    return (
        <Switch>
<<<<<<< HEAD
            <Route exact path ="/" component={Start} />
            <Route path ="/Search" component={Search} />
            <Route path ="/add-auction" component={AddAuction} />
=======
            <Route exact path="/" component={Start} />
            <Route path="/AddAuction" component={AddAuction} />
            <Route path="/auctiondetails" component={AuctionDetails} />
>>>>>>> 042abffb372cb58c6f99c365c7cacb431ea31ee7
        </Switch>
    );
}

export default Main;