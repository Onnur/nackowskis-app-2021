import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Start from '../views/Start';
import AddAuction from '../views/AddAuction';
import Search from '../views/Search';

const Main = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Start} />
            <Route path ="/Search" component={Search} />
            <Route path ="/add-auction" component={AddAuction} />
        </Switch>
    );
}

export default Main;