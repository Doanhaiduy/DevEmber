import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

type DayListItem = {
    day: number;
};

export default function DayListItem({ day }: DayListItem) {
    return (
        <Link href={'/day' + day} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#F9EDE3',
        flex: 1,
        aspectRatio: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        borderColor: '#9B4521',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#9B4521',
        fontSize: 70,
        fontFamily: 'AmaticBold',
    },
});
