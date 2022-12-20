import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import ThemeContextProvider from "./context/ThemeContextProvider";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  else {
    return (
      <SafeAreaProvider>
        <ThemeContextProvider>
          <UserContextProvider>
            <Navigation/>
            <StatusBar />
          </UserContextProvider>
        </ThemeContextProvider>
      </SafeAreaProvider>
    );
  }
}
