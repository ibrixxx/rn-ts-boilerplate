import {Pressable, Text, View} from 'react-native'
import {styles} from "../../constants/Styles";
import React, {useEffect, useRef, useState} from "react";
// import YoutubePlayer from "react-native-youtube-iframe";
// import Layout from "../../constants/Layout";
import {Image, Modal, StyleSheet} from "react-native";
import WebView from "react-native-webview";
import {scale, verticalScale} from "react-native-size-matters";
import {FontAwesome} from "@expo/vector-icons";
import {RootStackScreenProps} from "../../types";


export default function QuizScreen({navigation} : RootStackScreenProps<'Quiz'>) {
    const [ready, setReady] = useState<boolean>(false)
    // const [visible, setVisible] = useState<boolean>(true)

    return (
        <View style={styles.liveContainer}>
            <View style={{display: ready? 'flex':'none'}}>
                <WebView
                    onLoadEnd={() => setReady(true)}
                    source={{ uri: 'https://www.youtube.com/embed/UDIQwGb-4YQ?autoplay=1' }}
                    style={styles.video}
                    allowsFullscreenVideo={false}
                    allowsInlineMediaPlayback={true}
                    mediaPlaybackRequiresUserAction={false}
                    javaScriptEnabled={true}
                    onMessage={event => console.log(event)}
                    injectedJavaScriptBeforeContentLoaded={"document.getElementsByClassName('ytp-chrome-bottom')[0].style.display='none'"}
                    injectedJavaScript={"document.getElementsByClassName('ytp-chrome-bottom')[0].style.display='none'"}
                    userAgent={"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"}
                />
            </View>
            <View style={{
                position: 'absolute',
                backgroundColor: 'transparent',
                width: '100%', bottom: 0, height: '100%'}}
            >
                <View style={{width: '100%', height: '10%', marginTop: verticalScale(10), backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(10)}}>
                            <View style={{borderRadius: 20, backgroundColor: 'white', marginRight: scale(10), padding: scale(5)}}>
                                <FontAwesome style={{backgroundColor: 'whitesmoke'}} name="users" size={14} color="black" />
                            </View>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: scale(16)}}>4356</Text>
                        </View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: scale(14), marginTop: verticalScale(10)}}>10 pitanja</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/images/LOGO.png')} style={{width: scale(45), height: scale(40), marginBottom: verticalScale(10)}}/>
                        </Pressable>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 100, padding: scale(5)}}>
                            <Image source={require('../../assets/images/coin.png')} style={{width: scale(16), height: scale(16)}}/>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14, marginLeft: scale(5)}}>25 K </Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '89%', height: 40, backgroundColor: 'blue', marginTop: 200}}/>
            </View>
        </View>
        // <View style={styles.container}>
        //             <YoutubePlayer
        //                 webViewStyle={styles.video}
        //                 play={true}
        //                 onReady={() => setReady(true)}
        //                 mute={false}
        //                 videoId={"UDIQwGb-4YQ"}
        //                 onChangeState={() => setReady(true)}
        //                 height={Layout.window.height}
        //                 width={Layout.window.height}
        //                 webViewProps={{
        //                     allowsFullscreenVideo: true,
        //                     mediaPlaybackRequiresUserAction: false,
        //                 }}
        //                 // initialPlayerParams={{controls: false}}
        //             />
        //             <View style={{
        //                 position: 'absolute',
        //                 backgroundColor: 'red',
        //                 width: '100%', bottom: 0, height: 100}}
        //             />
        // </View>
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
