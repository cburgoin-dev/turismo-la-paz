import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { LocationProvider } from '../location/LocationProvider';
import { PlacesProvider, usePlaces } from '../places/PlacesProvider';
import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlaceTypeScreen from '../screens/PlaceTypeScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import SplashScreen from '../screens/SplashScreen';
import { LanguageProvider } from '../translations/LanguageContext';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

type AppNavigatorProps = {
    fontsLoaded: boolean;
};

export default function AppNavigator({
    fontsLoaded,
}: AppNavigatorProps) {
    return (
        <LanguageProvider>
            <LocationProvider>
                <PlacesProvider>
                    <AppContent fontsLoaded={fontsLoaded} />
                </PlacesProvider>
            </LocationProvider>
        </LanguageProvider>
    );
}

type AppContentProps = {
    fontsLoaded: boolean;
}

function AppContent ({
    fontsLoaded,
}: AppContentProps) {
    const { isReady } = usePlaces();

    const [minimumTimePassed, setMinimumTimePassed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimePassed(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!fontsLoaded || !isReady || !minimumTimePassed) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PlaceType" component={PlaceTypeScreen} />
                <Stack.Screen name="Categories" component={CategoryScreen} />

                <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
                <Stack.Screen name="Places" component={PlacesScreen} />

                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}