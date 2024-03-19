import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Stack, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const onboardingSteps = [
    {
        title: 'Welcome to DEVember',
        description:
            'Daily React Native tutorials during December. Learn how to build a mobile app from scratch, Lorem ipsum dolor sit amet consectetur adipisicing elit Quas, fugit?',
        icon: 'snowflake',
    },
    {
        title: 'Learn and grow together',
        description: 'Learn by building 24 project with React Native and Expo',
        icon: 'people-arrows',
    },
    {
        title: 'Education for children',
        description:
            'Contribute to the fundraiser to help children get access to education, Lorem ipsum dolor sit amet consectetur adipisicing elit Quas, fugit?',
        icon: 'book-reader',
    },
];

export default function onboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
    );
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <StatusBar style='light' />

            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step_, index) => {
                    const isActive = index === screenIndex;
                    return (
                        <View
                            key={index}
                            style={[
                                styles.stepIndicator,
                                {
                                    backgroundColor: isActive ? '#CEF202' : 'gray',
                                },
                            ]}
                        />
                    );
                })}
            </View>

            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent} key={screenIndex}>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5 style={styles.image} name={data.icon} size={150} color='#CEF202' />
                    </Animated.View>
                    <View style={styles.footer}>
                        <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>
                            {data.title}
                        </Animated.Text>
                        <Animated.Text entering={FadeIn.delay(150)} exiting={FadeOut} style={styles.description}>
                            {data.description}
                        </Animated.Text>

                        <View style={styles.buttonRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>
                                Skip
                            </Text>
                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 70,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontWeight: '700',
        fontFamily: 'InterBlack',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    description: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Inter',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto',
    },
    buttonRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        // padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },

    //step
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 50,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
});
