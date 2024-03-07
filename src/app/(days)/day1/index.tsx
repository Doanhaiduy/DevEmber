import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function DayDetailsScreen() {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Day 1',
                }}
            />
            <Text style={styles.text}>Day Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'AmaticBold',
        fontSize: 50,
    },
});
