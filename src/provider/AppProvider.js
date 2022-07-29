import React, {useEffect} from 'react';
import {flatten} from "utils/helpers";
import routers from "router/routers";
import {useLocation} from "react-router-dom";
import {useAppState} from "stores/module/app.store";
import {appCheckThemeService, appSetCurrentPageService} from "services/app.service";

function AppProvider({children}) {
    const pages = flatten(routers);
    const {pathname} = useLocation();
    const {theme} = useAppState();

    useEffect(() => {
        appCheckThemeService();
    }, [theme])

    useEffect(() => {
        const findPage = pages.find(i => i.path === pathname);
        if (findPage) {
            delete findPage.element;
            delete findPage.children;
            appSetCurrentPageService(findPage)
        }
    }, [pathname])

    return children;
}

export default AppProvider;