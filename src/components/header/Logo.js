import React from 'react';

import BrandLogo from 'images/osu_cart.png';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo({ country = 'com' }) {
  return (
    <Link to="/" className="logo">
      <img className="logo__img" alt="OSU Pharma" src={BrandLogo} />
      {country && <span className="logo__country">.{country}</span>}
    </Link>
  );
}

export default Logo;
