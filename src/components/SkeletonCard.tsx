import { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function SkeletonCard() {
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const translateX = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 300],
    });

    return (
        <View style={styles.card}>
            <View style={styles.image}>
                <Animated.View
                    style={[
                        styles.shimmer,
                        { transform: [{ translateX }] },
                    ]}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.lineShort} />
                <View style={styles.lineLong} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: height * 0.3035,
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#E6E6E6',
    },
    image: {
        flex: 1,
        backgroundColor: '#CFCFCF',
    },
    content: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        gap: 6,
    },
    lineShort: {
        width: '40%',
        height: 12,
        backgroundColor: '#8F8F8F',
        borderRadius: 6,
    },
    lineLong: {
        width: '70%',
        height: 12,
        backgroundColor: '#8F8F8F',
        borderRadius: 6,
    },
    shimmer: {
        position: 'absolute',
        width: 120,
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.55)'
    }
});