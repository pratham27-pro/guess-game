import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBw(min, max, exclude) {
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (random === exclude) {
        return generateRandomBw(min, max, exclude);
    } else {
        return random;
    }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBw(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!! You know this is wrong 😡", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandom = generateRandomBw(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRandom);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                    -
                </PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                    +
                </PrimaryButton>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
