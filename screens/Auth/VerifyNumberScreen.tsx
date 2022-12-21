import {Text, View} from "../../components/Themed";
import {AuthStackScreenProps} from "../../types";
import {styles} from "../../constants/Styles";

export default function VerifyNumberScreen({navigation, route}: AuthStackScreenProps<'VerifyNumber'>) {
    const phoneNumber = route.params.phoneNumber

    return (
        <View style={styles.container}>
            <Text>VerifyNumberScreen</Text>
            <Text onPress={() => navigation.navigate('UserDetails')}>{phoneNumber}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}
