import { createContext, useState } from "react";
export const Contex = createContext(null);
const ContexProvider = (props) => {
    
    return(
        <Contex.Provider value="js">
            <>
            {props.children}
            </>
        </Contex.Provider>
    )
}
export default ContexProvider;