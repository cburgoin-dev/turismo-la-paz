import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    const [fontsLoaded] = useFonts({
        PlayfairRegular: PlayfairDisplay_400Regular,
        PlayfairBold: PlayfairDisplay_700Bold,
        InterRegular: Inter_400Regular,
        InterMedium: Inter_500Medium,
    });

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <AppNavigator />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}