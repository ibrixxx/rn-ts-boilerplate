import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import PrimaryButton from "../../components/PrimaryButton";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {styles} from "../../constants/Styles";
import {scale} from "react-native-size-matters";
import useUser from "../../hooks/useUser";
import useTheme from "../../hooks/useTheme";
import Colors from "../../constants/Colors";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function ProfileScreen() {
    const {setUser} = useUser()
    const {theme} = useTheme()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ProfileScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <ThemeSwitch />
            <EditScreenInfo path="/screens/StoreScreen.tsx" />
            <PrimaryButton onPress={() => setUser(null)} style={{flexDirection: 'row', borderColor: Colors[theme].borderShadow, backgroundColor: Colors[theme].buttonBackground}}>
                <Ionicons name="exit-outline" size={24} color={Colors[theme].text} />
                <Text style={[styles.title, {marginLeft: scale(8)}]}>Logout</Text>
            </PrimaryButton>
        </View>
    );
}
