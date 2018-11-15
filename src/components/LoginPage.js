import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage =({startLogin}) =>
(
    <div className = "box-layout">
        <div className = "box-layout__box">
            <h1 className = "box-layout__title">BoilerPlate</h1>
            <h4>It's time to get your expenses on control</h4>
            <button onClick = {startLogin} className="button">LOGIN with Google</button>
        </div>
    </div>
)
const mapDispatchToProps = (dispatch) =>
({
    startLogin:()=>dispatch(startLogin())
})
export default connect(undefined,mapDispatchToProps)(LoginPage);