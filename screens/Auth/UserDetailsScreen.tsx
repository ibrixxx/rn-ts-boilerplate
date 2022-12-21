import {Text, View} from "../../components/Themed";
import {AuthStackScreenProps} from "../../types";
import {styles} from "../../constants/Styles";
import React from "react";
import AuthButton from "../../components/AuthButton";

export default function UserDetailsScreen({navigation}: AuthStackScreenProps<'UserDetails'>) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>UserDetailsScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <AuthButton onPress={() => navigation.navigate('Tutorial')}>
                <Text style={[styles.title, {color: 'white'}]}>Napravi racun</Text>
            </AuthButton>
        </View>
    );
}
