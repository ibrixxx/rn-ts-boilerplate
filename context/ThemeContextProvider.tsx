import React, {useContext, useState} from "react";
import useColorScheme from "../hooks/useColorScheme";

// @ts-ignore
export const ThemeContext = React.createContext()


const ThemeContextProvider = ({children}: {children: any}) => {
    const defaultTheme = useColorScheme()
    const [theme, setTheme] = useState<string>(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
