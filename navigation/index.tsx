/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable} from 'react-native';
import Colors from '../constants/Colors';
import ModalScreen from '../screens/RootStack/ModalScreen';
import NotFoundScreen from '../screens/RootStack/NotFoundScreen';
import StoreScreen from '../screens/BottomTab/StoreStack/StoreScreen';
import {
    AuthStackParamList,
    PlayStackParamList,
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps, StoreStackParamList
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import useTheme from "../hooks/useTheme";
import AuthHomeScreen from "../screens/Auth/AuthHomeScreen";
import VerifyNumberScreen from "../screens/Auth/VerifyNumberScreen";
import UserDetailsScreen from "../screens/Auth/UserDetailsScreen";
import TutorialScreen from "../screens/Auth/TutorialScreen";
import PlayScreen from "../screens/BottomTab/PlayStack/PlayScreen";
import PrizesScreen from "../screens/BottomTab/PrizesScreen";
import ProfileScreen from "../screens/BottomTab/ProfileScreen";
import useUser from "../hooks/useUser";
import {scale, verticalScale} from "react-native-size-matters";
import Svg, {Circle, Path} from 'react-native-svg';
import {BottomTabIconsSvg} from "../constants/SvgIconPaths";
import QuizScreen from "../screens/RootStack/QuizScreen";
import GameScreen from "../screens/BottomTab/PlayStack/GameScreen";
import BalanceScreen from "../screens/BottomTab/StoreStack/BalanceScreen";


export default function Navigation() {
    const themeObject = useTheme()

    return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={themeObject.theme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {user} = useUser()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={user? BottomTabNavigator:AuthStackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

function AuthStackNavigator() {
    return(
        <AuthStack.Navigator initialRouteName={'AuthHome'}>
            <AuthStack.Screen name={'AuthHome'} component={AuthHomeScreen} />
            <AuthStack.Screen name={'VerifyNumber'} component={VerifyNumberScreen} />
            <AuthStack.Screen name={'UserDetails'} component={UserDetailsScreen} />
            <AuthStack.Group screenOptions={{ presentation: 'modal' }}>
                <AuthStack.Screen name={'Tutorial'} component={TutorialScreen} />
            </AuthStack.Group>
        </AuthStack.Navigator>
    )
}

const PlayStack = createNativeStackNavigator<PlayStackParamList>()

function PlayStackNavigator() {
    return(
        <PlayStack.Navigator initialRouteName={'Main'}>
            <PlayStack.Screen name={'Main'} component={PlayScreen} />
            <PlayStack.Screen name={'Game'} component={GameScreen} />
        </PlayStack.Navigator>
    )
}


const StoreStack = createNativeStackNavigator<StoreStackParamList>()

function StoreStackNavigator() {
    return(
        <StoreStack.Navigator initialRouteName={'StoreItems'}>
            <StoreStack.Screen name={'StoreItems'} component={StoreScreen} />
            <StoreStack.Screen name={'Balance'} component={BalanceScreen} />
        </StoreStack.Navigator>
    )
}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const {theme} = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Play"
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tabIconSelected,
        headerShown: false,
        tabBarStyle: {
            borderRadius: scale(20),
            height: '10%'
        }
      }}>
      <BottomTab.Screen
        name="Play"
        component={PlayStackNavigator}
        options={({ navigation }: RootTabScreenProps<'Play'>) => ({
          title: 'Igre',
          tabBarIcon: ({ color }) => <MyTabBarIcon name="play" color={color} theme={theme}/>,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[theme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Store"
        component={StoreStackNavigator}
        options={{
          title: 'Store',
          tabBarIcon: ({ color }) => <TabBarIcon name="store" color={color} size={22} />,
        }}
      />
      <BottomTab.Screen
        name={'Prizes'}
        component={PrizesScreen}
        options={{
            title: 'Nagrade',
            tabBarIcon: ({ color }) => <TabBarIcon name="medal" color={color} size={26} />,
        }}
       />
       <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
            title: 'Profil',
            tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} size={26} />,
        }}
       />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
  size?: number
}) {
  return <FontAwesome5 size={props.size || 24} style={{marginBottom: verticalScale(-3)}} {...props} />;
}

function MyTabBarIcon(props: {
    name: keyof typeof BottomTabIconsSvg;
    color: string;
    theme: NonNullable<ColorSchemeName>
}) {
    const path = BottomTabIconsSvg[props.name]
    return <Svg style={{justifyContent: 'center', alignItems: 'center', marginBottom: verticalScale(-3)}} width="26" height="26" viewBox="0 0 24 24">
            <Circle cx="12" cy="12" r="12" fill={props.color}/>
            <Path d={path} fill={Colors[props.theme].background} />
           </Svg>;
}
