import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = ({startLogOut}) => (
  <header className="header">
    <div className="content-container">
      <div className="flex-container">
        <Link to="/dashboard" activeClassName="is-active"  className="header__title">
           <h1>My Blog</h1>
        </Link>
        <button onClick = {startLogOut}>LOGOUT</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps =(dispatch) =>
({
  startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined,mapDispatchToProps)(Header);