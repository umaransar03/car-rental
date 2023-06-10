import { createContext, useState, useContext } from "react";

export const GeneralContext = createContext();
export const useGeneralContext = () => useContext(GeneralContext);


export function CartProvider({ children }) {
    const [pickTime, setPickTime] = useState("")
    const [dropTime, setDropTime] = useState ("")

    const values = {
        pickTime,
        setPickTime,
        dropTime,
        setDropTime,
    }
    return (
        <GeneralContext.Provider value={values} >
            {children}
        </GeneralContext.Provider>
    )
}