import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="bettershmetsy2">
        <img src="https://imgforfec.s3.us-east-2.amazonaws.com/bettershmetsy2.png" />
      </div>
      <div className="topFooter">
        <div className="shopFooter">
          <h4>Shop</h4>
          <span>Gift Cards</span>
          <span>Shmetsy blog</span>
        </div>
        <div className="sellFooter">
          <h4>Sell</h4>
          <span>Sell on Shmetsy</span>
          <span>Teams</span>
          <span>Forumns</span>
          <span>Affiliates</span>
        </div>
        <div className="aboutFooter">
          <h4>About</h4>
          <span>Shmetsy, Inc.</span>
          <span>Policies</span>
          <span>Investors</span>
          <span>Careers</span>
          <span>Press</span>
          <span>Impact</span>
        </div>
        <div className="helpFooter">
          <h4>Help</h4>
          <span>Help center</span>
          <span>Privacy settings</span>
          <div className="download"><i className="logo">S</i> Download the Shmetsy App &nbsp;&nbsp;&nbsp;</div>
          <div className="icons">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="usd">
          <img src="https://imgforfec.s3.us-east-2.amazonaws.com/usa.png" />
          <span>United States&nbsp;&nbsp; | &nbsp;&nbsp;</span>
          <span>English (US)&nbsp;&nbsp; | &nbsp;&nbsp;</span>
          <span>$(USD)</span>
        </div>
        <div className="privacy">
          <span>© 2020 Shmetsy, Inc.</span>
          <span className="privacyLink">Terms of use</span>
          <span className="privacyLink">Privacy</span>
          <span className="privacyLink">Interest-based ads</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;