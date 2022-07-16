import React, {useEffect} from 'react';
import {useAppState} from "stores/module/app.store";
import {appCheckThemeService, appSetCurrentPageService} from "services/app.service";
import {useLocation} from "react-router-dom";
import {flatten} from "utils/helpers";
import {routers} from "router/routers";
import RouterProvider from "router";

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
            delete findPage.component;
            appSetCurrentPageService(findPage)
        }
    }, [pathname])

    return children;
}

function App(props) {
    return (
        <AppProvider>
            <RouterProvider/>
        </AppProvider>
    );
}

export default App;