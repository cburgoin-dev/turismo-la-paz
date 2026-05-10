import { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    View
} from 'react-native';

const { height } = Dimensions.get('window');

const PULSE_DURATION = 600;

export default function SkeletonCard() {
    const pulse = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(pulse, {
                    toValue: 1,
                    duration: PULSE_DURATION,
                    useNativeDriver: true,
                }),

                Animated.timing(pulse, {
                    toValue: 0,
                    duration: PULSE_DURATION,
                    useNativeDriver: true,
                }),
            ])
        );

        animation.start();

        return () => animation.stop();
    }, [pulse]);

    const opacity = pulse.interpolate({
        inputRange: [0, 1],
        outputRange: [0.2, 1],
    });

    return (
        <Animated.View 
            style={[styles.card, { opacity }]}
        >
            <View style={styles.image} />
    
            <View style={styles.topLeft}>
                <View style={styles.title} />
                <View style={styles.distance} />
            </View>
    
            <View style={styles.bottom}>
                <View style={styles.tagsRow}>
                    <View style={styles.tag} />
                    <View style={styles.tag} />
                    <View style={styles.tag} />
                </View>
    
                <View style={styles.tip} />
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: height * 0.3035,
        marginBottom: 16,

        borderRadius: 16,
        overflow: 'hidden',

        backgroundColor: '#F5F5F5',
    },

    image: {
        flex: 1,
        backgroundColor: '#EDEDED',
    },

    topLeft: {
        position: 'absolute',
        top: 12,
        left: 16,

        gap: 6,
    },

    title: {
        width: 140,
        height: 18,

        borderRadius: 6,

        backgroundColor: '#D6D6D6',
    },

    distance: {
        width: 80,
        height: 12,

        borderRadius: 6,

        backgroundColor: '#D6D6D6',
    },

    bottom: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        left: 12,
    },

    tagsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

        gap: 6,
        marginBottom: 8,
    },

    tag: {
        width: 50,
        height: 18,

        borderRadius: 10,

        backgroundColor: '#D6D6D6',
    },

    tip: {
        height: 32,

        borderRadius: 10,

        backgroundColor: '#D6D6D6',
    },
});