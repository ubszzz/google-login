import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import * as Google from "expo-google-app-auth";
const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `1076048151227-qh1b2hc9011u0tltldu215ohjr9b5ujf.apps.googleusercontent.com`,
        androidClientId: `1076048151227-vnn1vviv5b4qj1n3j0vtd10e46d2kr60.apps.googleusercontent.com`,
      });
      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in with Google</Text>
      <Button title="Sign in with Google" onPress={signInAsync} />
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
  },
});
