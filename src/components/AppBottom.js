import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function AppButton(
    { title, onPress, loading = false, disabled = false, style, textStyle }
) {
    return(
        <TouchableOpacity 
        style={[styles.button, (disabled || loading) && styles.disabled, style]}
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.84}
        accessibilityRole="button"
        >
        {loading ?
          <ActivityIndicator color="#fff" /> :
          <Text style={[styles.text, textStyle]}>{title}</Text>
        }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.md,
        minHeight: 52,
        paddingHorizontal: SPACING.lg,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.primaryDark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.22,
        shadowRadius: 8,
        elevation: 3,
    },

    disabled: {
        opacity: .6,
        elevation: 0,
    },

    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.2,
    }

})
