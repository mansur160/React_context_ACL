import React from 'react'
import {Outlet} from "react-router-dom";
import SideBar from "../components/SideBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const AppLayout = () => {
  return (
      <>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SideBar/>
                <div className="layout-page">
                  <Header/>
                    <div className="content-wrapper">
                        <Outlet/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default AppLayout