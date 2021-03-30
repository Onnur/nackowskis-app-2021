import React from 'react';
import {NavLink} from 'react-router-dom';
//import '../../styles/AppStyles.css';

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {  };
        this.onClick = this.onClick.bind(this);
        this.handleEnterClick = this.handleEnterClick.bind(this);
    }

    onClick(e){
        let search = document.getElementById('searchField');
        this.props.onChange(search.value);
    }

    handleEnterClick(event){
        console.log(event.keyCode);
        console.log('test2');
        if (event.keyCode === 13){
            document.getElementById('searchButton').click();
        }
    }

    render(){
        return (
            <div className="navigation">
                <div className="logo">
                    <NavLink className="navbarLink" to="/">
                        <h1 className="logoText">Nackowski: Grupp 5</h1>
                    </NavLink>
                </div>
                <div className="searchBar">
                    <input id="searchField" onKeyDown={this.handleEnterClick} placeholder="Sök auktion..." />
                    <NavLink to="/Search">
                        <button id="searchButton" aria-label="Search" onClick={this.onClick}><span aria-label="Search" role="img">&#128270;</span></button>
                    </NavLink>
                </div>
                <div className="pageNavigation">
                    <NavLink className="navbarLink" to="/">
                        <h2>Startsida</h2>
                    </NavLink>
                </div>
                <div className="pageNavigation">
                    <NavLink className="navbarLink" to="/CreateAuction">
                        <h2>Skapa auktion</h2>
                    </NavLink>
                </div>
            </div>
        );
    }
}