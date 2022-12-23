/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | NavigatorScreenParams<AuthStackParamList>;
  Quiz: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Store: undefined;
  Play: undefined;
  Prizes: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  AuthHome: undefined;
  VerifyNumber: { phoneNumber: string };
  UserDetails: undefined;
  Tutorial: undefined;
}

export type PlayStackParamList = {
  Main: undefined,
  Game: undefined
}

export type StoreStackParamList = {
  StoreItems: undefined,
  Balance: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type PlayStackScreenProps<Screen1 extends keyof PlayStackParamList, Screen2 extends keyof RootTabParamList> = CompositeScreenProps<
    NativeStackScreenProps<PlayStackParamList, Screen1>,
    CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen2>, NativeStackScreenProps<RootStackParamList>>
>;

export type StoreStackScreenProps<Screen1 extends keyof StoreStackParamList, Screen2 extends keyof RootTabParamList> = CompositeScreenProps<
    NativeStackScreenProps<StoreStackParamList, Screen1>,
    CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen2>, NativeStackScreenProps<RootStackParamList>>
>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
    AuthStackParamList,
    Screen
>;
