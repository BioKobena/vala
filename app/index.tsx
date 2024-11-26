import { Text, View } from "react-native";
import React from "react";
import ValaIndex from "./(vala)";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
    return (
        <SafeAreaProvider>
            <ValaIndex />
        </SafeAreaProvider>
    );
};

export default index;
