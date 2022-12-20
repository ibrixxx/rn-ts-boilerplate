/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/RootStack/ModalScreen';
import NotFoundScreen from '../screens/RootStack/NotFoundScreen';
import FriendsScreen from '../screens/BottomTab/FriendsScreen';
import StoreScreen from '../screens/BottomTab/StoreScreen';
import {AuthStackParamList, RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import useTheme from "../hooks/useTheme";
import AuthHomeScreen from "../screens/Auth/AuthHomeScreen";
import VerifyNumberScreen from "../screens/Auth/VerifyNumberScreen";
import UserDetailsScreen from "../screens/Auth/UserDetailsScreen";
import TutorialScreen from "../screens/Auth/TutorialScreen";
import PlayScreen from "../screens/BottomTab/PlayScreen";
import PrizesScreen from "../screens/BottomTab/PrizesScreen";
import ProfileScreen from "../screens/BottomTab/ProfileScreen";
import useUser from "../hooks/useUser";


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
        tabBarActiveTintColor: Colors[theme].tint,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={({ navigation }: RootTabScreenProps<'Friends'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
        component={StoreScreen}
        options={{
          title: 'StoreScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={'Play'}
        component={PlayScreen}
        options={{
            title: 'PlayScreen',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={'Prizes'}
        component={PrizesScreen}
        options={{
            title: 'Prizes',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
       />
       <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
            title: 'ProfileScreen',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
       />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
