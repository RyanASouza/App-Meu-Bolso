import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BalanceCard from '../../src/components/BalanceCard';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Meu Bolso</Text>            
                    <Text style={styles.sub}>Resumo Financeiro</Text> 
                </View>           
                <TouchableOpacity>
                    <Text>
                        Perfil
                    </Text>
                </TouchableOpacity>
            </View>
            <BalanceCard balance={50145}/>

             <AppButton title="Gerar relatório PDF" />
             <View style={styles.row}>
                
             </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        paddingTop: 60
    },
    header: {
        flexDirection: 'center',
        paddingVertical: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2f3640'
    },
    sub: {
        color: '#7f8c8d'
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: -4
    }
});