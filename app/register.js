import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../src/components/AppBottom';
import AppInput from '../src/components/AppInput';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS==='ios'?'padding':undefined}>
            <View>
             <Text style={styles.title}> Meu Bolso </Text>
             <Text style={styles.subtitle}> Controle suas finanças </Text>

             <AppInput label="E-mail" placeholder="Digite seu e-mail"
             autoCapitalize="none" keyboardType="email-adress"/>

             <AppInput label="Senha" secureTextEntry placeholder="Digite sua Senha" />

              <AppInput label="Senha" secureTextEntry placeholder="Confirme sua Senha" />

             <AppButton title="Criar conta" />

             <TouchableOpacity style={styles.linkButton} activeOpacity={0.75}>
                <Text style={styles.link}>Fazer login</Text>
             </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign:'center',
    },
    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32
    },
    linkButton: {
        minHeight: 48,
        borderWidth: 1,
        borderColor: '#008f72',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    link: {
        color: '#008f72',
        fontWeight: '700',
    }
})
