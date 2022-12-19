import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import ThemeContextProvider from "./context/ThemeContextProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  else {
    return (
      <SafeAreaProvider>
        <ThemeContextProvider>
          <Navigation/>
          <StatusBar />
        </ThemeContextProvider>
      </SafeAreaProvider>
    );
  }
}
