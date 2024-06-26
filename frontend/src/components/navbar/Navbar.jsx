import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/all3dlogo.svg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1.5px 1.5px -2px black;
  padding: 13px 150px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
    padding: 13px 50px;
  }
`;

const Logo = styled.div`
  height: 35px;
  margin-top: 10px;

  @media (max-width: 800px) {
    margin-left: 0;
    display: flex;
  }
`;

const MenuButton = styled.div`
  display: none;
  position: absolute;
  top: 0.95rem;
  right: 0.75rem;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 2rem;

  span {
    height: 0.2rem;
    width: 100%;
    background-color: #b6b5b5;
    border-radius: 0.1rem;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const NavMenu = styled.div`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 20px;
    color: #383838;
    font-size: 16px;
    font-weight: 500;
    margin-left: auto;

    @media (max-width: 800px) {
      display: none;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.25rem;
    }

    &.open {
      display: flex;
    }

    li {
      margin-top: 10px;

      @media (max-width: 800px) {
        width: 100%;
        text-align: left;
      }
    }

    .nav-link {
      color: inherit;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #000000;
      }
    }
  }
`;

const NavLoginButton = styled.button`
  width: 127px;
  height: 48px;
  outline: none;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  color: #515151;
  font-size: 16px;
  font-weight: 500;
  background: white;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 5px;
  align-items: center;

  &:hover {
    background: #000000;
    color: white;
  }

  &:active {
    border-color: rgb(144, 192, 255);
    border-width: 3px;
  }
  &:hover .nav-link:hover{
    background: #000000;
    color: white;
  }
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    border: none;
    background: none;
    margin-left: auto;
    margin-top: auto;
    color: #515151;
    cursor: pointer;

    &:hover {
      color: #000000;
      background: white;
      text-decoration: none;
    }
    &:hover .nav-link:hover{
      background: none;
      color: black;
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <Link to='/'><img src={logo} alt='' /></Link>
      </Logo>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <NavMenu>
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/store" className="nav-link">Store</Link></li>
          <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
          <li>
            <NavLoginButton>
              <Link to="/loginsignup" className="nav-link">Login</Link>
            </NavLoginButton>
          </li>
        </ul>
      </NavMenu>
    </NavbarContainer>
  );
}

export default Navbar;
