import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlaceTypeScreen from '../screens/PlaceTypeScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import { LanguageProvider } from '../translations/LanguageContext';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const FORCE_HOME = false;

export default function AppNavigator() {
    const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

    useEffect(() => {
        const checkLaunch = async () => {
            const launched = await AsyncStorage.getItem('hasLaunched');

            setInitialRoute(
                FORCE_HOME
                    ? 'Home'
                    : (launched ? 'PlaceType' : 'Home')
            );
        };

        checkLaunch();
    }, []);

    if (!initialRoute) {
        return <View style={{ flex: 1, backgroundColor: '#000' }} />;
    }

    return (
        <LanguageProvider>
            <NavigationContainer>
                <Stack.Navigator 
                    screenOptions={{ headerShown: false }}
                    initialRouteName={initialRoute}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="PlaceType" component={PlaceTypeScreen} />
                    <Stack.Screen name="Categories" component={CategoryScreen} />
                    <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
                    <Stack.Screen name="Places" component={PlacesScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </LanguageProvider>
    );
}