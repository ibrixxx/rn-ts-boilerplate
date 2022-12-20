import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContextProvider";
import {ColorSchemeName} from "react-native";

type Theme = {
    theme: NonNullable<ColorSchemeName>;
    setTheme: (theme: string) => void;
}

export default function useTheme() {
    return useContext(ThemeContext) as Theme
}
