import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function DayDetailsScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day 2: Onboarding' }} />
            <Text>Day 2: Onboarding</Text>
            <Link href={'/day2/onboarding'} asChild>
                <Button title='Go to onboarding' />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({});
