import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useSateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useSateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img alt="Amazon Logo White" src="https://www.nicepng.com/png/full/228-2281836_vault-logo-available-amazon-app-store.png" className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="search" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user ? user?.email : 'Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to='./orders'>
                    <div className="header__option">
                    <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            &amp; Orders
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLineOne">
                       Your 
                    </span>
                    <span className="header__optionLineTwo">
                        prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
