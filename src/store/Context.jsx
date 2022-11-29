import { createContext, useState, useEffect } from "react";
const Context = createContext()

import React from 'react'

const ContextProvider = ({children}) => {

  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{open, setOpen}}>
        {children}
    </Context.Provider>
  )
}

export  {ContextProvider, Context}