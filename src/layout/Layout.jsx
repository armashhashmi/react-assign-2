import React from "react";
import TextSection from "../TextSection/TextSection";
import Card from "../Card/Card";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="layout">
        <TextSection />
        <Card />
      </div>
    </>
  );
}

export default Layout;
