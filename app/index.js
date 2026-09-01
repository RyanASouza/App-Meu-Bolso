import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import AppButton from '../src/components/AppBottom';
import AppInput from '../src/components/AppInput';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 

    return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS==='ios'?'padding':undefined}>
    <View>
        <Text> Meu Bolso </Text>
        <Text> Controle suas finanças </Text>

        <AppInput label="E-mail" placeholder="Digite seu e-mail"
        autoCapitalize="none" keyboardType="email-adress"/>

        <AppInput label="Senha" secureTextEntry placeholder="Digite sua Senha" />

        <AppButton title="Entrar" />
    </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

})