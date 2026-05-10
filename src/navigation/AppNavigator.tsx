import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { LocationProvider } from '../location/LocationProvider';
import { ItemsProvider, useItems } from '../places/ItemsProvider';
import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import GroupsScreen from '../screens/GroupsScreen';
import HomeScreen from '../screens/HomeScreen';
import ItemsScreen from '../screens/ItemsScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import SplashScreen from '../screens/SplashScreen';
import { LanguageProvider } from '../translations/LanguageContext';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const SPLASH_DURATION = 1000;

type AppNavigatorProps = {
    fontsLoaded: boolean;
};

export default function AppNavigator({
    fontsLoaded,
}: AppNavigatorProps) {
    return (
        <LanguageProvider>
            <LocationProvider>
                <ItemsProvider>
                    <AppContent fontsLoaded={fontsLoaded} />
                </ItemsProvider>
            </LocationProvider>
        </LanguageProvider>
    );
}

type AppContentProps = {
    fontsLoaded: boolean;
}

function AppContent({
    fontsLoaded,
}: AppContentProps) {
    const { isReady } = useItems();

    const [minimumTimePassed, setMinimumTimePassed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimePassed(true);
        }, SPLASH_DURATION);

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
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                />

                <Stack.Screen 
                    name="Group" 
                    component={GroupsScreen} 
                />
                
                <Stack.Screen 
                    name="Categories" 
                    component={CategoryScreen} 
                />

                <Stack.Screen 
                    name="Recommendations" 
                    component={RecommendationsScreen} 
                />

                <Stack.Screen 
                    name="Items" 
                    component={ItemsScreen} 
                />

                <Stack.Screen 
                    name="Detail" 
                    component={DetailScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}