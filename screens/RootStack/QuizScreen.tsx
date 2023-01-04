import { Text, View } from '../../components/Themed';
import {styles} from "../../constants/Styles";
import React from "react";
import WebView from "react-native-webview";

export default function QuizScreen() {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://www.youtube.com/watch?v=UDIQwGb-4YQ&ab_channel=PTZOptics' }}
                style={styles.video}
                allowsFullscreenVideo
            />
        </View>
    );
}
