import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlaceTypeScreen from '../screens/PlaceTypeScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import { LanguageProvider } from '../translations/LanguageContext';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <LanguageProvider>
            <NavigationContainer>
                <Stack.Navigator 
                    screenOptions={{ headerShown: false}}
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
        </LanguageProvider>
    );
}