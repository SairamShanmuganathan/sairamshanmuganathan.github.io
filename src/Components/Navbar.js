import React from 'react';
import { Home } from 'react-feather';
import styled from 'styled-components';

export const MenuItems = [
    {
      Title: "Home",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "About Us",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "Our Services",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "Contact Us",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "Sign Up",
      url: "#",
      cName: "nav-links-mobile"
    }
  ];

  export default function Navbar() {
    return (
      <Navbarr.Wrapper>
        <Navbarr.Logo>Sairam Shanmuganathan</Navbarr.Logo>
        <Navbarr.Items>
          <Navbarr.Item><Navbarr.Icon><Home size={15}/></Navbarr.Icon>Home</Navbarr.Item>
          <Navbarr.Item>Projects</Navbarr.Item>
          <Navbarr.Item>Contact</Navbarr.Item>
        </Navbarr.Items>
      </Navbarr.Wrapper>
    );
  }

  export function MobileNavbar(){
    return(
      <MobileNavbarr.Wrapper>
          <MobileNavbarr.Items>
            <MobileNavbarr.Item><MobileNavbarr.Icon><Home size={35}/></MobileNavbarr.Icon><br/>Home</MobileNavbarr.Item>
            <MobileNavbarr.Item>Blog</MobileNavbarr.Item>
            <MobileNavbarr.Item>About</MobileNavbarr.Item>
          </MobileNavbarr.Items>
        </MobileNavbarr.Wrapper>
    );
  }

  const Navbarr = {
    Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    `,
    Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
    Items: styled.ul`
    display: flex;
    list-style: none;
    `,
    Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    `,
    Icon: styled.span``,
  };

  const MobileNavbarr = {
    Wrapper: styled(Navbarr.Wrapper)``,
    Items: styled(Navbarr.Items)``,
    Item: styled(Navbarr.Item)``,
    Icon: styled.span``,
  };