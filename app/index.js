import { Text, View } from 'react-native';
import AppInput from '../src/components/AppInput';

export default function Login() {
    return
    <View>
        <Text> Meu Bolso </Text>
        <Text> Controle suas finanças </Text>

        <AppInput label="E-mail" placeholder="Digite seu e-mail"
        autoCapitalize="none" keyboardType="email-adress"/>

        <AppInput label="Senha" secureTextEntry placeholder="Digite sua Senha" />
    </View>
}

const styles = StyleSheet.create({

})