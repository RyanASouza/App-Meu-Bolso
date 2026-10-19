import { StyleSheet, View } from 'react-native';

export default function AppCard({children, style}) {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16
  }
});