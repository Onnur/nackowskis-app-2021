import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Start from '../views/Start';
import AddAuction from '../views/AddAuction';

const Main = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Start} />
            <Route path ="/add-auction" component={AddAuction} />
        </Switch>
    );
}

export default Main;