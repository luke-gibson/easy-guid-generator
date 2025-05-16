import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0D162B] text-white flex flex-col items-center justify-center">
      <header className="w-full p-4 bg-[#1A2238] text-center">
        <h1 className="text-2xl font-bold">EasyGUID Generator</h1>
      </header>
      <main className="w-full max-w-2xl p-4">{children}</main>
      <footer className="w-full p-4 bg-[#1A2238] text-center">
        Powered by Oval Creative
      </footer>
    </div>
  );
};

export default Layout;