import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Login realizado com sucesso!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f8f9fa',
    },
    message: {
        color: '#2f3640',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
});
