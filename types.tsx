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
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Friends: undefined;
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

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
    AuthStackParamList,
    Screen
>;
