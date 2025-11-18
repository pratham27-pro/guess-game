import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState("");

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) screen = <GameScreen userNumber={userNumber} />;
    return (
        <LinearGradient
            colors={[Colors.primary700, Colors.accent500]}
            style={styles.rootScreen}
        >
            <SafeAreaProvider style={styles.rootScreen}>
                {screen}
            </SafeAreaProvider>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
});
