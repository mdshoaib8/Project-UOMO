import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import { Test } from "../pages/Test"

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* <Test /> */}
        </>
    )
}