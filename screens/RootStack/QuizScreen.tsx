import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {styles} from "../../constants/Styles";

export default function QuizScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modal</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/ModalScreen.tsx" />
        </View>
    );
}
