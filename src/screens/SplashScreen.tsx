import {
    ActivityIndicator,
    Image,
    StyleSheet,
    View
} from 'react-native';

const LOGO_SIZE = 170;

const LOADER_MARGIN_TOP = 20

const BACKGROUND_COLOR = '#FFFFFF';
const LOADER_COLOR = '#1B73B3';

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
                color={LOADER_COLOR}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: BACKGROUND_COLOR,
    },

    logo: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
    },

    loader: {
        marginTop: LOADER_MARGIN_TOP,
    },
});