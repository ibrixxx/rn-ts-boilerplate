import {Text, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {scale, verticalScale} from "react-native-size-matters";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const UserChatItem = ({name, comment}: {name: string, comment: string}) => {
    const mainColor = getRandomColor()
    const backColor = getRandomColor()

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%', marginVertical: verticalScale(3)}}>
            <View style={{padding: scale(2), borderRadius: 10 ,backgroundColor: backColor, marginRight: scale(5)}}>
                <FontAwesome name="user" size={scale(16)} color={mainColor}/>
            </View>
            <Text style={{color: '#50A6FB', fontWeight: 'bold', fontSize: scale(14), marginRight: scale(10)}}>{name}</Text>
            <Text style={{color: 'white', fontSize: scale(14)}}>{comment}</Text>
        </View>
    )
}

export default UserChatItem
