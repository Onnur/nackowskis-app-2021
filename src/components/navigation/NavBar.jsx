import React, { useContext }from 'react';
import { NavLink } from 'react-router-dom';
import { AuctionContext } from '../../contexts/AuctionContextProvider'

<<<<<<< HEAD
export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchTerm:""};
        this.onClick = this.onClick.bind(this);
        this.handleEnterClick = this.handleEnterClick.bind(this);
    }

    onClick(e){
        let search = document.getElementById('searchField').value;
        console.log("sökte "+this.state.searchTerm);
        //this.props.onChange(search.value);
    }

    handleEnterClick(event){
        console.log(event.keyCode);
        //console.log('test2');
        this.setState({searchTerm:document.getElementById('searchField').value});
        if (event.keyCode === 13){
            document.getElementById('searchButton').click();
        }
    }
=======

const NavBar = () => {

    const { auctions, setSelectedAuction, search, setSearchVal } = useContext(AuctionContext)
>>>>>>> 042abffb372cb58c6f99c365c7cacb431ea31ee7

        return (
            <div className="navigation">
                <div className="logo">
                    <NavLink className="navbarLink" to="/">
                        <h1 className="logoText">Nackowski: Grupp 5</h1>
                    </NavLink>
                </div>
<<<<<<< HEAD
                <div className="searchBar">
                    <input id="searchField" onKeyDown={this.handleEnterClick} placeholder="Sök auktion..." />

                    <NavLink to={{
                    pathname:'/Search',
                    state: {searchTerm:this.state.searchTerm}  
                    }}>
                    <button id="searchButton" aria-label="Search" onClick={this.onClick}><span aria-label="Search" role="img">&#128270;</span></button>
                    </NavLink>

=======
                <div className="searchBar">               
                <input type="text"
                onChange={(e) => {
                    setSearchVal(e.target.value)
                }} />
            <button onClick={search} role="img"><span aria-label="Search" role="img">&#128270;</span>sök</button>
>>>>>>> 042abffb372cb58c6f99c365c7cacb431ea31ee7
                </div>
                <div className="pageNavigation">
                    <NavLink className="navbarLink" to="/">
                        <h2>Startsida</h2>
                    </NavLink>
                </div>
                <div className="pageNavigation">
                    <NavLink className="navbarLink" to="/AddAuction">
                        <h2>Skapa auktion</h2>
                    </NavLink>
                </div>
            </div>
        )
    }

export default NavBar;