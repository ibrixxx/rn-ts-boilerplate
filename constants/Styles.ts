import {StyleSheet} from "react-native";
import {scale} from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(29)
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    buttonAuth: {
        backgroundColor: '#3399FE',
        borderRadius: scale(8),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(18),
    },
    button: {
        borderRadius: scale(13),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(18),
        borderWidth: scale(1),
        borderBottomWidth: scale(7)
    },
    buttonOutline: {
        borderRadius: scale(8),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(18),
        borderWidth: scale(2.5),
    }
});
