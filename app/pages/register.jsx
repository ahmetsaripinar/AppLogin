import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Register() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <Button
          title="Register"
          onPress={() => alert("Registration Successful!")}
        />
        <Link href="./login" style={styles.link}>
          Already have an account? Login here.
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
        marginBottom: 16,
    },
    input: {
        width: "100%",
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
    },
    link: {
        marginTop: 16,
        color: "blue",
        textDecorationLine: "underline",
    },
});
