import React, {useState} from 'react';
import {Switch} from "react-native";
import useTheme from "../hooks/useTheme";

export default function ThemeSwitch() {
    const themeObject = useTheme()
    const [isEnabled, setIsEnabled] = useState<boolean>(themeObject.theme === 'light');

    const onThemeChange = () => {
        setIsEnabled(prev => !prev)
        themeObject.setTheme(themeObject.theme === 'dark'? 'light':'dark')
    }

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onThemeChange}
            value={isEnabled}
        />
    );
}
