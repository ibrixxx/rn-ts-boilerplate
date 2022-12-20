import {Text, TouchableOpacity, View} from "../../components/Themed";
import {StyleSheet} from "react-native";
import {AuthStackScreenProps} from "../../types";

export default function AuthHomeScreen({navigation}: AuthStackScreenProps<'AuthHome'>) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>AuthHomeScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TouchableOpacity onPress={() => navigation.navigate('VerifyNumber', {phoneNumber: '12345678'})}>
                <Text style={styles.title}>Nastavi</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
