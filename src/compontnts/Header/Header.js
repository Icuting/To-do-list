import React from "react";
import logo from '../../image/penguin-512_icon-icons.com_76422.png';
import '../../style/style.sass';
import {NavLink} from "react-router-dom";

const navBarItems = [
    {name: 'To Do', path: '/todo'},
    {name: 'About', path: '/about'},
    {name: 'Registration', path: '/registration'}
];
function Header() {
    let navBarItemLink = navBarItems.map((item, index) =>{
        return(
            <li className='header__item-link' key={index}>
                <NavLink className='header__link'
                    activeClassName='itemActive'
                    to={item.path}>
                    {item.name}
                </NavLink>
            </li>
        )
    })
    return(
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='header__navBar'>
                <ul>
                    {navBarItemLink}
                </ul>
            </div>
        </div>
    )
}
export default Header