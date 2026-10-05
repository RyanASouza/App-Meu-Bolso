import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Meu Bolso</Text>            
                <Text>Resumo Financeiro</Text>            
                <TouchableOpacity>
                    <Text>
                        Perfil
                    </Text>
                </TouchableOpacity>
                <AppButton title="Gerar relatório PDF">

                </AppButton>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {

    },
    header: {

    }
});
