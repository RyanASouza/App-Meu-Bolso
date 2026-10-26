import { StyleSheet, Text } from 'react-native';
import { formatCurrency } from '../utils/format';
import AppCard from './AppCard';

export default function BalanceCard({balance}) {
    return (
        <AppCard style={styles.card}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>{formatCurrency(1000)}</Text>
        </AppCard>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#2f3640'
    },
    label:{
        color: '#dcdde1'
    },
    value:{
        color:'#fff',
        fontSize: 30,
        fontWeight: '900',
        marginTop: 6
    }
});