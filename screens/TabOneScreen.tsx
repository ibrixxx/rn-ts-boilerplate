import {StyleSheet, Switch} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useState} from "react";
import useTheme from "../hooks/useTheme";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const themeObject = useTheme()
  const [isEnabled, setIsEnabled] = useState<boolean>(themeObject.theme === 'light');

  const onThemeChange = () => {
      setIsEnabled(prev => !prev)
      themeObject.setTheme(themeObject.theme === 'dark'? 'light':'dark')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onThemeChange}
          value={isEnabled}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
