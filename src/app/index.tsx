import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import DayListItem from '@components/core/DayListItem';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, i) => i + 1);

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                numColumns={2}
                renderItem={({ item }) => <DayListItem day={item} />}
            />

            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 10,
    },

    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },
});
