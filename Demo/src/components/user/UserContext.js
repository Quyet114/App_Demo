import React, { useContext, createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null); // user is null by default
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}