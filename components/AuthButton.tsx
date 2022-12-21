import React from 'react';
import { TouchableOpacity, TouchableOpacityProps} from "./Themed";
import {styles} from "../constants/Styles";


export default function AuthButton(props: TouchableOpacityProps) {

    return (
        <TouchableOpacity {...props} style={[styles.buttonAuth, props.style]}>
            {props.children}
        </TouchableOpacity>
    );
}
