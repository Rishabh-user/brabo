import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <div>
      <Header />
        <main>
            <Outlet /> 
        </main>
      <Footer />
    </div>
  );
}

export default Layout;
