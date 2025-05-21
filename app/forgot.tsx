import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../styles/joinstyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function resetpassword() {
    const navigation = useNavigation();

    return (
    <SafeAreaProvider>
        <SafeAreaView>
                <View style={styles.iconsection}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleText}>Reset your Password</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput keyboardType="email-address" style={styles.formControl} />

                            <TouchableOpacity style={styles.requestbtn}>
                              <Text style={styles.buttonText}>Request Opt</Text>
                            </TouchableOpacity>



                    <Text style={styles.formLabel}>Enter your opt</Text>
                    <View style={styles.formPasswordControl}>
                        <TextInput style={styles.titleText} />
                    </View>
                                                <TouchableOpacity style={styles.resetbtn}>
                              <Text style={styles.resettxt}>Reset</Text>
                            </TouchableOpacity>
                    </View>
                    </SafeAreaView>
            </SafeAreaProvider>
        

    )
}