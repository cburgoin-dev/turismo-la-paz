import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo-splash.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            
            <ActivityIndicator
                size="large"
                style={styles.loader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 170,
        height: 170,
    },
    loader: {
        marginTop: 20,
    },
})