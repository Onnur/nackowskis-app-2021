import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from '../views/Start';
import AddAuction from '../views/AddAuction';
import AuctionDetails from '../views/AuctionDetailView'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/AddAuction" component={AddAuction} />
            <Route path="/auctiondetails" component={AuctionDetails} />
        </Switch>
    );
}

export default Main;