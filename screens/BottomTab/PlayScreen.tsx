import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import PrimaryButton from "../../components/PrimaryButton";
import {styles} from "../../constants/Styles";
import Colors from "../../constants/Colors";
import useTheme from "../../hooks/useTheme";
import {RootTabScreenProps} from "../../types";

export default function PlayScreen({navigation}: RootTabScreenProps<'Play'>) {
    const {theme} = useTheme()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PlayScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/StoreScreen.tsx" />
            <PrimaryButton onPress={() => navigation.navigate('Quiz')} style={{backgroundColor: Colors[theme].primaryColor, borderColor: Colors[theme].primaryBorderShadow}}>
                <Text style={styles.buttonTitle}>Igraj!</Text>
            </PrimaryButton>
        </View>
    );
}
