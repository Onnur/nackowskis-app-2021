import React, { useContext }from 'react';
import { NavLink } from 'react-router-dom';
import { AuctionContext } from '../../contexts/AuctionContextProvider'


const NavBar = () => {

    const { auctions, setSelectedAuction, search, setSearchVal } = useContext(AuctionContext)

        return (
            <div className="navigation">
                <div className="logo">
                    <NavLink className="navbarLink" to="/">
                        <h1 className="logoText">Nackowski: Grupp 5</h1>
                    </NavLink>
                </div>
                <div className="searchBar">               
                <input type="text"
                onChange={(e) => {
                    setSearchVal(e.target.value)
                }} />
            <button onClick={search} role="img"><span aria-label="Search" role="img">&#128270;</span>sök</button>
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