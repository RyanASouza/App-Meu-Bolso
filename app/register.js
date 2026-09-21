import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../src/components/AppBottom';
import AppInput from '../src/components/AppInput';
import { signUp } from '../src/services/authService';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 

    async function handleRegister() {
        if(!email.trim()||!password.trim()||!confirm.trim())
            return Alert.alert('Atenção, preencha todos os campos'),
            console.log('Preencha todos os campos!');
        if(password.length < 8)
            return Alert.alert('Ateção' , 'A senha deve ter no mínimo 8 caracteres')
        if(password!==confirm)
            return Alert.alert('Atenção','As senhas não conferem');    

        try{
            setLoading(true);
            const {error} = await signUp(email.trim(), password.trim());
            if(error){
                Alert.alert('Erro no cadastro', error.message);
                console.log('Erro no cadastro', error.message);
                return;
            }
            else {
                Alert.alert('Sucesso',
                    'Conta criada com sucesso, Faça login para continuar.'),
                    router.replace('/');
            }
        }finally{
            setLoading(false)
        }
    }

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

             <AppButton title="Criar conta" loading={loading} onPress={handleRegister}/>

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
