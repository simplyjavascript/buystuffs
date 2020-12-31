import React from 'react';
import {
  FaCartArrowDown,
  FaHome,
  FaQuestionCircle,
  FaMailBulk,
} from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';
import Logo from './Logo';
import NavItem from './NavItem';
import {
  StyledH1,
  StyledH2,
  StyledLoginBtn,
} from '../components/StyledComponents';
import CurrencyContext from '../contexts/CurrencyContext';
import CartCount from './CartCount';

const NavBar = () => {
  return (
    <header className="bg-white black-80 tc pv4">
      <Logo />
      <StyledH1>BuyStuff</StyledH1>
      <StyledH2>Awesome deals @ affordable prices</StyledH2>
      <nav className="bt bb tc mw7 center mt4">
        <NavItem title="Home" icon={<FaHome />} to="/" />
        <NavItem title="FAQ" to="/faq" icon={<FaQuestionCircle />} />
        <NavItem title="Contact Us" to="/contact" icon={<FaMailBulk />} />
        <CartCount title="Cart" to="/cart" icon={<FaCartArrowDown />} />
        <CurrencyContext.Consumer>
          {(context) => (
            <StyledLoginBtn onClick={context.toggleCurrency}>
              <BiMoney /> Switch to:
              {context.currency === 'CAD' ? 'INR' : 'CAD'}
            </StyledLoginBtn>
          )}
        </CurrencyContext.Consumer>
      </nav>
    </header>
  );
};

export default NavBar;
