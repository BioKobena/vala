import React, { useState, useEffect } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import * as Speech from "expo-speech";
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ValaIndex = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Fonction pour faire parler Vala
  const speak = (message: string) => {
    setIsSpeaking(true);
    Speech.speak(message, {
      onDone: () => setIsSpeaking(false),
      onError: () => {
        setIsSpeaking(false);
        alert("Erreur lors de l'utilisation de l'assistant vocal.");
      },
    });
  };

  // Message d'accueil au lancement
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    SplashScreen.hideAsync();

    const welcomeMessage = "Bonjour et bienvenue dans l'application Vala, votre assistante vocale. Sélectionnez une option pour continuer.";
    speak(welcomeMessage);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={Colors.dark.icon} />
      <Text style={styles.valaText}>🌟 Vala – Assistant Vocal pour Formulaires 🗣️</Text>

      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>📄</Text>
            <Text style={styles.menuLabel}>Formulaires</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuLabel}>Paramètres</Text>
          </View>
        </View>
        <View style={styles.menuRow}>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>🎓</Text>
            <Text style={styles.menuLabel}>Tutoriel</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>ℹ️</Text>
            <Text style={styles.menuLabel}>À propos</Text>
          </View>
        </View>
      </View>

      <View style={styles.valaButton}>
        <Button
          title="Réactiver Vala"
          onPress={() => speak("Bonjour, je suis Vala votre assistante vocale")}
          disabled={isSpeaking}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.light.grey,
    padding: 20,
  },
  valaText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  menuContainer: {
    width: "100%",
    marginBottom: 20,
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  menuItem: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  menuIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  menuLabel: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  valaButton: {
    width: "60%",
    marginTop: 20,
  },
});

export default ValaIndex;
