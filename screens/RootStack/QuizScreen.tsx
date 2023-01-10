import {FlatList, Pressable, SafeAreaView, ScrollView, Text, TextInput, TextInputComponent, View} from 'react-native'
import {styles} from "../../constants/Styles";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
// import YoutubePlayer from "react-native-youtube-iframe";
// import Layout from "../../constants/Layout";
import {Image, Modal, StyleSheet} from "react-native";
import WebView from "react-native-webview";
import {scale, verticalScale} from "react-native-size-matters";
import {FontAwesome} from "@expo/vector-icons";
import {RootStackScreenProps} from "../../types";
import UserChatItem from "../../components/UserChatItem";
import Svg, {Circle, Path} from "react-native-svg";

function getRandomText(length: number, username: boolean) {
    let text = "";
    let possible = username?
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789":
        "ABC DEFGHI JKL MNO PQRSTUVW XYZabc defgh ijklm nopq rstuvw xyz 01 2345 6789 ";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export default function QuizScreen({navigation} : RootStackScreenProps<'Quiz'>) {
    const [ready, setReady] = useState<boolean>(false)
    // const [visible, setVisible] = useState<boolean>(true)

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    }, []);

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
                width: '100%', bottom: 0, height: '100%', paddingTop: verticalScale(24), justifyContent: 'space-between'}}
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
                            <Image source={require('../../assets/images/LOGO.png')} style={{width: scale(50), height: scale(40), marginBottom: verticalScale(10)}}/>
                        </Pressable>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 100, padding: scale(5)}}>
                            <Image source={require('../../assets/images/coin.png')} style={{width: scale(16), height: scale(16)}}/>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14, marginLeft: scale(5)}}>25 K </Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', height: '30%', borderRadius: scale(10), paddingBottom: verticalScale(15), backgroundColor: 'rgba(0,0,0,0.3)'}}>
                    <FlatList
                        data={Array.from({length: 33}, (_, i) => i + 16).filter(val => val>=16 && val<=30)}
                        renderItem={({item}) => <UserChatItem name={getRandomText(5, true)} comment={getRandomText(item, false)}/>}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                    <TextInput placeholderTextColor={'whitesmoke'} placeholder={'Napiši nešto ...'} style={{width: '90%', height: scale(30), color: 'whitesmoke', borderWidth: scale(2), borderColor: 'white', borderRadius: scale(10), paddingLeft: scale(10)}}/>
                    <View style={{width: scale(25), height: scale(30), position: 'absolute', bottom: scale(15), right: 0, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <Svg
                            width={scale(30).toString()}
                            height={scale(30).toString()}
                            viewBox="0 0 40 40"
                            style={{justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Path fill={'white'} stroke={'black'} d="M15.2831 0.0195212C12.1495 0.345331 9.76758 1.18247 7.3583 2.80487C4.90495 4.45693 3.01272 6.63816 1.70167 9.32525C0.899122 10.9702 0.483413 12.2613 0.181019 14.0481C-0.0160167 15.2124 -0.0604747 17.4062 0.0886833 18.6046C0.474074 21.7004 1.43906 24.1318 3.34103 26.799L3.56345 27.1108L2.33697 29.9923C1.40874 32.173 1.11049 32.94 1.11049 33.1462C1.11049 33.5192 1.33588 33.8443 1.67799 33.9649C1.93271 34.0547 2.15618 34.0217 6.45927 33.2572L10.9733 32.4553L11.5827 32.6509C13.1997 33.1701 14.6443 33.3876 16.4998 33.3912C19.1998 33.3965 21.4979 32.8499 23.8856 31.6348C28.9562 29.0541 32.3921 24.0036 32.9427 18.3213C33.0559 17.1532 32.9947 15.0305 32.8176 13.9779C32.3538 11.2216 31.3352 8.8263 29.6653 6.56472C29.0209 5.69206 27.5847 4.20809 26.7594 3.56205C24.3894 1.70711 21.8521 0.609079 18.8674 0.146639C18.2061 0.0441998 15.8498 -0.039348 15.2831 0.0195212ZM16.1663 13.4662C16.8188 13.8027 16.8536 14.673 16.2293 15.0459C16.0164 15.173 15.8885 15.1789 13.343 15.1789C10.8056 15.1789 10.6693 15.1727 10.4644 15.0473C10.0108 14.77 9.88451 14.1185 10.2045 13.7071C10.472 13.3632 10.5437 13.355 13.343 13.3524C15.6894 13.3501 15.9626 13.3611 16.1663 13.4662ZM22.5504 18.0499C22.6521 18.1106 22.8006 18.278 22.8806 18.4219C23.1165 18.8464 22.9726 19.3326 22.5303 19.6054C22.3262 19.7312 22.153 19.735 16.513 19.7352C10.3175 19.7355 10.5261 19.746 10.2334 19.4188C10.055 19.2195 9.98086 18.882 10.0546 18.6052C10.1167 18.3716 10.3823 18.0593 10.5808 17.9863C10.6351 17.9663 13.3089 17.9476 16.5226 17.9447C21.8543 17.9399 22.3818 17.9491 22.5504 18.0499Z" />
                        </Svg>
                    </View>
                </View>
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
