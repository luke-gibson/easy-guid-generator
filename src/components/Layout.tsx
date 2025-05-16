import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <main className="bg-slate-800 bg-gradient-to-r from-slate-800 to-slate-900 min-h-dvh w-screen flex flex-col items-center justify-center">
        {children}
      </main>
  );
};

export default Layout;