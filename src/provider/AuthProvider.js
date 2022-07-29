import React, {useEffect} from 'react';
import {useAuthState} from "stores/module/auth.store";
import {Navigate, useNavigate} from "react-router-dom";
import {route} from "utils/helpers";

function AuthProvider({children}) {
    const {token} = useAuthState();

    if (token) return children;

    return <Navigate to={'/auth/login'} replace={true}/>
}

export default AuthProvider;