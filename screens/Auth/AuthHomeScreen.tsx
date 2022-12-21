import {Text, View} from "../../components/Themed";
import {ImageBackground } from "react-native";
import {AuthStackScreenProps} from "../../types";
import React, {useLayoutEffect} from "react";
import {styles} from "../../constants/Styles";
import AuthButton from "../../components/AuthButton";

export default function AuthHomeScreen({navigation}: AuthStackScreenProps<'AuthHome'>) {

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    }, [])

    return (
        <ImageBackground source={require('../../assets/images/AuthBackground.png')} style={styles.container}>
            <Text style={styles.title}>AuthHomeScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <AuthButton onPress={() => navigation.navigate('VerifyNumber', {phoneNumber: '12345678'})} >
                <Text style={[styles.title, {color: 'white'}]}>Nastavi</Text>
            </AuthButton>
        </ImageBackground>
    );
}
