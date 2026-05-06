import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

type Props = {
    text: string;
    style?: any;
};

export default function AnimatedTitle({
    text,
    style,
}: Props) {
    const translateX = useRef(new Animated.Value(0)).current;

    const [containerWidth, setContainerWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    const shouldAnimate =
        textWidth > containerWidth &&
        containerWidth > 0;

    useEffect(() => {
        translateX.stopAnimation();
        translateX.setValue(0);

        if (!shouldAnimate) return;

        const distance =
            textWidth - containerWidth + 40;

        const anim = Animated.loop(
            Animated.sequence([
                Animated.delay(300),

                Animated.timing(translateX, {
                    toValue: -distance,
                    duration: textWidth * 4,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),

                Animated.delay(250),

                Animated.timing(translateX, {
                    toValue: 0,
                    duration: 450,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                Animated.delay(400),
            ])
        );

        anim.start();

        return () => anim.stop();
    }, [
        shouldAnimate,
        textWidth,
        containerWidth,
        text,
    ]);

    return (
        <View
            style={styles.outerContainer}
            onLayout={(e) =>
                setContainerWidth(
                    e.nativeEvent.layout.width
                )
            }
        >
            <ScrollView
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                style={styles.measureScroll}
            >
                <Text
                    style={[style, styles.textStyle]}
                    onLayout={(e) =>
                        setTextWidth(
                            e.nativeEvent.layout.width
                        )
                    }
                >
                    {text}
                </Text>
            </ScrollView>

            <Animated.View
                style={[
                    styles.animatedView,
                    {
                        width: shouldAnimate
                            ? textWidth + 100
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
                                ? textWidth + 10
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
        overflow: 'hidden',
        width: '100%',
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