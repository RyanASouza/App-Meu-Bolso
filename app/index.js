import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../src/components/AppBottom';
import AppInput from '../src/components/AppInput';
import { signIn } from '../src/services/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Atenção', 'Informe e-mail e senha');
            return;
        }

        try {
            setLoading(true);
            const { error } = await signIn(email.trim(), password);
            if (error) {
                Alert.alert('Erro', error.message);
                return;
            }
            router.replace('/(app)/home');
        } catch (error) {
            Alert.alert('Erro', error.message || 'Não foi possível entrar.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View>
                <Text style={styles.title}>Meu Bolso</Text>
                <Text style={styles.subtitle}>Controle suas finanças</Text>
                <AppInput label="E-mail" placeholder="Digite seu e-mail" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
                <AppInput label="Senha" secureTextEntry placeholder="Digite sua senha" value={password} onChangeText={setPassword} />
                <AppButton title="Entrar" onPress={handleLogin} loading={loading} />
                <TouchableOpacity style={styles.linkButton} activeOpacity={0.75} onPress={() => router.push('/register')}>
                    <Text style={styles.link}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f8f9fa' },
    title: { fontSize: 34, fontWeight: '900', color: '#2f3640', textAlign: 'center' },
    subtitle: { color: '#7f8c8d', textAlign: 'center', marginTop: 8, marginBottom: 32 },
    linkButton: { minHeight: 48, borderWidth: 1, borderColor: '#008f72', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 12 },
    link: { color: '#008f72', textAlign: 'center', fontWeight: '700' },
});
