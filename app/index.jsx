import * as React from "react";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground } from "react-native";

import { Link } from "expo-router";

import { assets } from "../src/img/assets.js"; // assets.js'den logo'yu import ettik

import { loadFonts } from "../src/utils/fonts.js";

import CustomButton from "../components/ui/CustomButton.jsx";
import LottieView from "lottie-react-native";



const index = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAppFonts = async () => {
      try {
        console.log("Font yükleme başlıyor...");
        await loadFonts();
        console.log("Fontlar başarıyla yüklendi.");
        setFontsLoaded(true);
      } catch (error) {
        console.error("Font yüklenirken hata oluştu:", error);
      }
    };

    loadAppFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={assets.background_img} // assets'e background resminizi eklemeyi unutmayın
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={assets.logo} style={styles.logo} />
        <LottieView
          loop
          autoPlay
          style={{
            width: 150,
            height: 200,
            marginHorizontal: "auto",
          }}
          source={require("../src/img/animation.json")}
        ></LottieView>
        <View style={{}}>
          <CustomButton
            title="Sign Up"
            type="secondary"
            size="xl"
            textColor="#000"
            onPress={() => {
              alert("Login");
            }}
          >
            <Text></Text>
          </CustomButton>
        </View>
        <View>
          <Text style={styles.title}>Lorem consecter ipsum</Text>
        </View>
        {/* logo'yu doğru şekilde kullanıyoruz */}
        <Link href="./pages/login" asChild></Link>
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
    objectFit: "contain",
  },
  title: {
    flex:1,
    top:-100,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    width: 250,
    padding: 12,
    alignItems: "center",
    borderRadius: 20,
  },
});
