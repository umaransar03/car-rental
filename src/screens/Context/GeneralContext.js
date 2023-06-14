import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

export const GeneralContext = createContext();
export const useGeneralContext = () => useContext(GeneralContext);


export function CartProvider({ children }) {
    const [pickTime, setPickTime] = useState("")
    const [dropTime, setDropTime] = useState ("")
    const navigate = useNavigate();

    

    const handleContact = () => {
        navigate('/contact')
    };
    const handleAbout = () => {
        navigate('/about')
    };
    const handleHome = () => {
        navigate('/')
    };
    const handleTestimonials = () => {
        navigate('/testimonials')
    };

    const values = {
        pickTime,
        setPickTime,
        dropTime,
        setDropTime,
        handleContact,
        handleAbout,
        handleHome,
        handleTestimonials
    }
    return (
        <GeneralContext.Provider value={values} >
            {children}
        </GeneralContext.Provider>
    )
}