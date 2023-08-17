import React from 'react';
import { Navigation } from "@/components/navigation";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <Navigation />
    </div>
  );
};

export default Layout;
