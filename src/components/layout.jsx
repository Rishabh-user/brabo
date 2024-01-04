import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { LanguageProvider } from './LanguageContext';
function Layout() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default Layout;
