import stores from 'stores'
import {setToken, setPermission} from "stores/module/auth.store";

const dispatch = stores.dispatch;

export const authSetTokenService = (token) => {
    dispatch(setToken(token));
}

export const authSetPermissionService = (permissions) => {
    dispatch(setPermission(permissions));
}