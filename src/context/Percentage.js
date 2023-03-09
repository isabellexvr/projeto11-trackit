import React, { createContext, useState, useContext } from "react";

const PercentageContext = createContext();

export default function PercentageProvider({ children }) {

    const [percentage, setPercentage] = useState(0)

    return (
        <PercentageContext.Provider value={{ percentage, setPercentage }}>
            {children}
        </PercentageContext.Provider>
    )
}

export function usePercentage() {
    const context = useContext(PercentageContext);
    const { percentage, setPercentage } = context;
    return ({ percentage, setPercentage });
}