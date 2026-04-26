import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import PlacesScreen from '../screens/PlacesScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Categories" component={CategoryScreen} />
                <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
                <Stack.Screen name="Places" component={PlacesScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}