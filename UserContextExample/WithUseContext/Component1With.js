
import { createContext, useState } from "react";
import { Component2With } from "./Component2With ";
 
export const NameContext = createContext();
 
export const Component1With=()=>{
    const[name,setName]=useState("Milind");
    return(
        <NameContext.Provider value={name}>
            <h1>Component 1 With</h1>  
            <Component2With/>
        </NameContext.Provider>
    );
}