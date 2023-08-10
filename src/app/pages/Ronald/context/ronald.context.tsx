
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  valorContext: number;
  setValorContext: React.Dispatch<React.SetStateAction<number>>;
}

interface MyComponentProps {
  children: ReactNode;
}

export const RonaldContext = createContext<ContextType>({ valorContext: 0, setValorContext: () => {} });

export const RonaldProvider: React.FC<MyComponentProps> = ({ children }) => {

  const [valorContext, setValorContext] = useState<number>(0);

  return (
    <RonaldContext.Provider value={{ valorContext, setValorContext }}>
      {children}
    </RonaldContext.Provider>
  );
};

export const useRonaldContext = () => {
  const context = useContext(RonaldContext);

  if(context == undefined){
    // throw new Error('RonaldContext must be used within RonaldProvider');
    throw new Error('RonaldContext must be used within RonaldProvider');
  } 

  return context;
};

