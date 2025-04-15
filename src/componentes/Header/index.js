import React, { useState } from 'react';
import Logo from '../Logo';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavLink = styled(Link)`
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secondary};
    text-decoration: none;
    padding: 20px 15px;
    font-weight: ${({ active }) => active ? '600' : '400'};
    position: relative;
    transition: all 0.3s ease;
    
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${({ active }) => active ? '100%' : '0'};
        height: 3px;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: width 0.3s ease;
    }
    
    &:hover:after {
        width: 100%;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const IconButton = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2rem;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.1);
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    cursor: pointer;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
    }
`;

const MobileMenu = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    padding: 20px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

const MobileNavLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 40px;
`;

const MobileNavLink = styled(Link)`
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secondary};
    text-decoration: none;
    padding: 15px 0;
    display: block;
    font-weight: ${({ active }) => active ? '600' : '400'};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
`;

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    const navItems = [
        { path: '/', label: 'Início' },
        { path: '/catalog', label: 'Catálogo' },
        { path: '/categories', label: 'Categorias' },
        { path: '/about', label: 'Sobre' },
    ];
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return (
        <HeaderContainer>
            <Logo />
            
            <Nav>
                <NavLinks>
                    {navItems.map(item => (
                        <li key={item.path}>
                            <NavLink 
                                to={item.path}
                                active={location.pathname === item.path ? 1 : 0}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </NavLinks>
            </Nav>
            
            <IconsContainer>
                <IconButton to="/profile">
                    <FaUser />
                </IconButton>
                <IconButton to="/cart">
                    <FaShoppingCart />
                </IconButton>
                <MobileMenuButton onClick={toggleMobileMenu}>
                    <FaBars />
                </MobileMenuButton>
            </IconsContainer>
            
            {isMobileMenuOpen && (
                <>
                    <Overlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMobileMenu}
                    />
                    <MobileMenu
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween' }}
                    >
                        <CloseButton onClick={toggleMobileMenu}>
                            <FaTimes />
                        </CloseButton>
                        <MobileNavLinks>
                            {navItems.map(item => (
                                <li key={item.path}>
                                    <MobileNavLink 
                                        to={item.path}
                                        active={location.pathname === item.path ? 1 : 0}
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.label}
                                    </MobileNavLink>
                                </li>
                            ))}
                        </MobileNavLinks>
                    </MobileMenu>
                </>
            )}
        </HeaderContainer>
    );
}

export default Header;