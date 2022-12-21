import React from 'react';
import { TouchableOpacity, TouchableOpacityProps} from "./Themed";
import {styles} from "../constants/Styles";


export default function PrimaryButton(props: TouchableOpacityProps) {

    return (
        <TouchableOpacity {...props} style={[styles.button, props.style]}>
            {props.children}
        </TouchableOpacity>
    );
}
