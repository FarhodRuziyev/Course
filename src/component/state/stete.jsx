import { createContext, useState } from "react";

export const DateContext = createContext();
export const DatalarContext = createContext();


export const ProviderDate = ({children})=>{
  const [ date, setDate ] = useState(false);
  return(
    <DateContext.Provider value={{ date, setDate}}>
      {children}
    </DateContext.Provider>
  )
};
export const ProviderDatalar = ({children})=>{
  const [ datalar, setDatalar ] = useState(false);
  return(
    <DatalarContext.Provider value={{ datalar, setDatalar}}>
      {children}
    </DatalarContext.Provider>
  )
};