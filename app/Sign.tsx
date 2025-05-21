import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/joinstyle"; // Adjust the path if your file structure is different
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Join() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Image
            source={require("../assets/images/hvlogo1.png")}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
        </View>

        <Text style={styles.titleText}>Sign in to your Account</Text>
        <Text style={styles.subText}>Enter your email and password to sign in.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.formControl} />

          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} secureTextEntry />
            <Ionicons name="eye-off" size={24} color="#7E7B7B" />
          </View>

          <Text
            style={styles.forgotPasswordText}
            onPress={() => navigation.navigate("forgot" as never)}
          >
            Forgot password?
          </Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Sign" as never)}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/google.png")}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/facebook.png")}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("join" as never)}>
            <Text style={styles.signupSubTitleText}>Join now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
