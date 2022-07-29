import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "components/common/header/Header";
import Footer from "components/common/footer/Footer";

function AppLayout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default AppLayout;