import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name='index'
                options={{
                    title: 'DEVember',
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({});
