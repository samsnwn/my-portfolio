import { createContext, useState } from "react";
const Context = createContext();

const ContextProvider = ({children}) => {
    const [desktop, setDesktop] = useState(false)
    return (
        <Context.Provider value={{desktop, setDesktop}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}