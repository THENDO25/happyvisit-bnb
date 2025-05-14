import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/joinstyle";
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
<Image source={require('@/assets/images/hvlogo1.png')} />
        </View>
        <Text style={styles.titleText}>Create an account</Text>
        <Text style={styles.subText}>
          Register your account with us.
        </Text>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.formControl} />
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} />
            <Ionicons name="eye-off" size={24} color="#7E7B7B" />
          </View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} />
            <Ionicons name="eye-off" size={24} color="#7E7B7B" />
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("Sign" as never)}>
          <Text style={styles.buttonText}>join now</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign" as never)}>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}