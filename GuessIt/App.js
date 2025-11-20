import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState("");
    const [gameOver, setGameOver] = useState(true);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameOver(false);
    }
    function gameOverHandler() {
        setGameOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber)
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    if (gameOver && userNumber) screen = <GameOverScreen />;

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
