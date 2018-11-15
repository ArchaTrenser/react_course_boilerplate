import React from 'react';
import {connect} from 'react-redux';
import {Route , Redirect} from 'react-router-dom';

export const PublicRouter = ({isAuthenicated, component:Component, ...rest}) =>(
    <Route {...rest} component={(props)=>
    (
        isAuthenicated ?
        (    <Redirect to="/dashboard" />
        ):(
            <Component {...props}/>
        )
    )} />
);

const mapStateToProps =(state)=>
({
    isAuthenicated : !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRouter)