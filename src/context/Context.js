import { createContext, useState } from "react";

const context = createContext();

export function UserProvider({ children }) {
  const [config, setConfig] = useState({});
  const [info, setInfo] = useState({})

  return (
    <context.Provider 
    value={{ 
        config, setConfig, 
        info, setInfo,
        }}>

      {children}
    </context.Provider>
  );
}

export default context;
