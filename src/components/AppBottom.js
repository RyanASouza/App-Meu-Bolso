import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function AppButton(
    { title, onPress, loading=false, disabled=false }
) {
    return(
        <TouchableOpacity 
        style={StyleSheet.button, (disabled || loading)
        && StyleSheet.disabled}
        onPress={onPress}
        disabled={disabled || loading}
        >
        {loading ?
          <ActivityIndicator color="#fff" /> :
          <Text style={StyleSheet.text}>{title}</Text>
        }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        alignItems: 'center'
    },

    disabled: {
        opacity: .6
    },

    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }

})