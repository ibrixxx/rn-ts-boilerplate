import {Text, View} from "../../components/Themed";
import {AuthStackScreenProps} from "../../types";
import {styles} from "../../constants/Styles";
import useUser from "../../hooks/useUser";
import OutlinedButton from "../../components/OutlinedButton";
import React from "react";
import Colors from "../../constants/Colors";
import useTheme from "../../hooks/useTheme";

export default function TutorialScreen({navigation}: AuthStackScreenProps<'Tutorial'>) {
    const {setUser} = useUser()
    const {theme} = useTheme()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TutorialScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <OutlinedButton style={[styles.buttonOutline, {borderColor: Colors[theme].tint}]} onPress={() => setUser({name: 'RijadSan', points: 100})}>
                <Text style={[styles.title, {color: Colors[theme].tint}]}>Dalje</Text>
            </OutlinedButton>
        </View>
    );
}
