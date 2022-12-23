import { Text, View } from '../../../components/Themed';
import {styles} from "../../../constants/Styles";
import {StoreStackScreenProps} from "../../../types";

export default function BalanceScreen({navigation}: StoreStackScreenProps<'Balance','Store'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}
