import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useAuthState} from "stores/module/auth.store";

function AuthLayout(props) {

    const {token} = useAuthState();

    if (token) return <Navigate to={'/'} replace={true}/>

    return (
        <>
            <Outlet/>
        </>
    );
}

export default AuthLayout;