import React from 'react';
import { TouchableOpacity, TouchableOpacityProps} from "./Themed";
import {styles} from "../constants/Styles";


export default function OutlinedButton(props: TouchableOpacityProps) {

    return (
        <TouchableOpacity {...props} style={[styles.buttonOutline, props.style]}>
            {props.children}
        </TouchableOpacity>
    );
}
