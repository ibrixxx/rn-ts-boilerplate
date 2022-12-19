import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContextProvider";

type Theme = {
    theme: string;
    setTheme: (theme: string) => void;
}

export default function useTheme() {
    return useContext(ThemeContext) as Theme
}
