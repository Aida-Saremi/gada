import React, { useState, useContext } from 'react';

const AppContexts = React.createContext();

const AppProviders = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

 

  return (
    <AppContexts.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContexts.Provider>
  );
};

export const useGlobalContexts = () => {
  return useContext(AppContexts);
};

export { AppContexts, AppProviders };
