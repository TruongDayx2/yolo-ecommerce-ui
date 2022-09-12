import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <div className="container">{children}</div>
        </div>
    );
};

export default Layout;
