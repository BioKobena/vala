import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  Button,
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Speech from 'expo-speech';
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "@/constants/Colors";
// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-voice/voice";
import { Easing } from "react-native-reanimated";

const STYLES = ["default", "dark-content", "light-content"] as const;
const TRANSITIONS = ["fade", "slide", "none"] as const;

const index = () => {
  const [vala, setVala] = useState("vala");


  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    const message = "Bonjour, je suis Vala votre assistante vocale";
    setIsSpeaking(true);
    Speech.speak(message, {
      onDone: () => setIsSpeaking(false),
      onError: () => {
        setIsSpeaking(false);
        alert("Erreur lors de l'utilisation de l'assistant vocal.");
      },
    });
  };
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.dark.icon}
        />
        <Text style={styles.valaText}>
          🌟 Vala – Assistant Vocal pour Formulaires 🗣️
        </Text>

        <View style={styles.valaButton}>
          <Button
            title="Vala"
            onPress={speak}
            disabled={isSpeaking}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: Colors.light.grey,
    gap: 10,
  },
  valaText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },

  valaButton: {
    width: "40%",
  },
});

export default index;
