import { createContext, useState, useEffect, useContext } from 'react'

export const appContext = createContext()

export const AppProvider = ({ children }) => {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>
}

export const useAppContext = () => {
  return useContext(appContext)
}
