import { Text, View } from '../../components/Themed';
import {styles} from "../../constants/Styles";
import React, {useState} from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import Layout from "../../constants/Layout";
import {Modal, StyleSheet} from "react-native";
// import WebView from "react-native-webview";


export default function QuizScreen() {
    const [ready, setReady] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(true)

    return (
        //     <View style={{display: ready? 'flex':'none'}}>
        //         <WebView
        //             onLoadEnd={() => {
        //                 console.log('finish')
        //                 setReady(true)
        //             }}
        //             source={{ uri: 'https://www.youtube.com/embed/UDIQwGb-4YQ' }}
        //             style={styles.video}
        //             allowsFullscreenVideo
        //             mediaPlaybackRequiresUserAction={false}
        //         />
        //     </View>
        <View style={styles.container}>
                    <YoutubePlayer
                        webViewStyle={styles.video}
                        play={true}
                        onReady={() => setReady(true)}
                        mute={false}
                        videoId={"UDIQwGb-4YQ"}
                        onChangeState={() => setReady(true)}
                        height={Layout.window.height}
                        width={Layout.window.height}
                        webViewProps={{
                            allowsFullscreenVideo: true,
                            mediaPlaybackRequiresUserAction: false,
                        }}
                        // initialPlayerParams={{controls: false}}
                    />
                    <View style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        width: '100%', bottom: 0, height: 100}}
                    />

        </View>
    );
}

const stylesx = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView: {
        backgroundColor: 'black',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
