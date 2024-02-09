import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import CartSidebar from "./CartSidebar";

function Layout({ children }) {
    return (
        <>
            <NavBar />
            <CartSidebar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
