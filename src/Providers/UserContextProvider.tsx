import { ReactNode, createContext } from "react";

const UserContext = createContext(null);

function UserContextProvider({ children }: { children: ReactNode }) {
  return (
    <UserContext.Provider value={{ user: {} }}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
