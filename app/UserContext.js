"use client"; // Ensures hooks work

import { createContext, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ value, children }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
