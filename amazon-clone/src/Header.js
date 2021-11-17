//top navigation bar will be here

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png " alt="not visible"/>

      <div className="header__search">
        <input className="header__searchInput" type="text"/>

        {/* logo */}

      </div>

      <div className="header__nav">
        {/* hello sign in */}
        <div className="header__option">

          <span className="header__optionLineOne">Hello Guest</span>

          <span className="header__optionLineOne">Sign in</span>

        </div>
        {/* orders */}
        <div className="header__option">

        <span className="header__optionLineOne">Returns</span>

        <span className="header__optionLineOne">& Orders</span>


        </div>
        {/* your prime */}
        <div className="header__option">

        <span className="header__optionLineOne">Your</span>

        <span className="header__optionLineOne"> Prime</span>

        </div>
        
      </div>





    </div>

    
  )
}

export default Header
