import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to LoginApp!</Text>
            <Text style={styles.subtitle}>You have successfully logged in.</Text>
            <Button title="Logout" onPress={() => alert("Logged out successfully!")} />
            <Link href="" style={styles.link}>
                Go back to Login
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 16,
    },
    link: {
        marginTop: 16,
        color: "blue",
        textDecorationLine: "underline",
    },
});
