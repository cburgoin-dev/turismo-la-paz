import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    ScrollView,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View
} from 'react-native';

const INITIAL_DELAY = 300;
const RETURN_DELAY = 250;
const FINAL_DELAY = 400;

const RETURN_DURATION = 450;
const SCROLL_SPEED_FACTOR = 4;

const EXTRA_SCROLL_DISTANCE = 40;
const EXTRA_CONTAINER_WIDTH = 100;
const EXTRA_TEXT_WIDTH = 10;

type Props = {
    text: string;
    style?: StyleProp<TextStyle>;
};

export default function AnimatedTitle({
    text,
    style,
}: Props) {
    // Refs
    const translateX = useRef(new Animated.Value(0)).current;

    // State
    const [containerWidth, setContainerWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    // Derived values
    const shouldAnimate =
        textWidth > containerWidth &&
        containerWidth > 0;

    const scrollDistance = textWidth - containerWidth + EXTRA_SCROLL_DISTANCE;

    useEffect(() => {
        translateX.stopAnimation();
        translateX.setValue(0);

        if (!shouldAnimate) return;

        const animation = Animated.loop(
            Animated.sequence([
                Animated.delay(INITIAL_DELAY),

                Animated.timing(translateX, {
                    toValue: -scrollDistance,
                    duration: textWidth * SCROLL_SPEED_FACTOR,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),

                Animated.delay(RETURN_DELAY),

                Animated.timing(translateX, {
                    toValue: 0,
                    duration: RETURN_DURATION,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                Animated.delay(FINAL_DELAY),
            ])
        );

        animation.start();

        return () => animation.stop();
    }, [
        shouldAnimate,
        scrollDistance,
        textWidth,
        translateX,
    ]);

    return (
        <View
            style={styles.outerContainer}
            onLayout={(e) => {
                setContainerWidth(
                    e.nativeEvent.layout.width
                );
            }}
        >
            <ScrollView
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                style={styles.measureScroll}
            >
                <Text
                    style={[style, styles.textStyle]}
                    onLayout={(e) => {
                        setTextWidth(
                            e.nativeEvent.layout.width
                        );
                    }}
                >
                    {text}
                </Text>
            </ScrollView>

            <Animated.View
                style={[
                    styles.animatedView,
                    {
                        width: shouldAnimate
                            ? textWidth + EXTRA_CONTAINER_WIDTH
                            : '100%',
                        transform: [{ translateX }],
                    },
                ]}
            >
                <Text
                    numberOfLines={1}
                    ellipsizeMode="clip"
                    style={[
                        style,
                        styles.textStyle,
                        {
                            width: shouldAnimate
                                ? textWidth + EXTRA_TEXT_WIDTH
                                : '100%',
                        },
                    ]}
                >
                    {text}
                </Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        overflow: 'hidden',
    },

    measureScroll: {
        position: 'absolute',
        opacity: 0,
        height: 0,
    },

    animatedView: {
        flexDirection: 'row',
    },
    
    textStyle: {
        flexWrap: 'nowrap',
    },
});