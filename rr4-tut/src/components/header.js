import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navigationBar">
            <NavLink activeClassName="active" exact to='/' className="item">
                Home
            </NavLink>
            <NavLink activeClassName="active" to='/about/JS' className="item">
                About
            </NavLink>
            <NavLink activeClassName="active" to='/posts' className="item">
                Posts
            </NavLink>
            <NavLink activeClassName="active" to='/myapge' className="item">
                MyPage
            </NavLink>
            <NavLink activeClassName="active" to='/login' className="item">
                Login
            </NavLink>
            <NavLink activeClassName="active" to='/search?keyword=미스터선샤인' className="item">
                Search
            </NavLink>
        </div>
    );
};

export default Header;