import { Stack } from 'expo-router';

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
    );
}
