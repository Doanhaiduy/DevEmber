import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function DayDetailsScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
            <Text>Day 2: Markdown</Text>
            <Link href={'/day3/editor'} asChild>
                <Button title='Go to editor' />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({});
