import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Icon from "react-native-vector-icons/FontAwesome";
import Productos from "./src/pages/Productos";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

const bottomImage = require("./src/assets/imageninicio.jpg");

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Productos />
    </NavigationContainer>
  );
};

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  const [showProducts, setShowProducts] = React.useState(false);

  const handleShowProducts = () => {
    setShowProducts(true);
  };

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bottomImageContainer}>
        <Image style={styles.bottomImage} source={bottomImage} />
      </View>
      {showProducts ? (
        <AppNavigator />
      ) : (
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={handleShowProducts}
          >
            <Image
              style={styles.image}
              source={require("./src/assets/foto1.jpg")}
            />
            <Text style={styles.imageText}>Productos</Text>
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./src/assets/foto2.jpg")}
            />
            <Text style={styles.imageText}>Recetas</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./src/assets/foto3.jpg")}
            />
            <Text style={styles.imageText}>Comunidad</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./src/assets/foto4.jpg")}
            />
            <Text style={styles.imageText}>Unite a mi equipo</Text>
          </View>

          <View style={styles.imageContainer}>
            <Icon name="whatsapp" size={35} color="#25D366" />
          </View>
        </View>
      )}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  imageContainer: {
    width: "45%",
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },

  imageText: {
    padding: 10,
    textAlign: "center",
    fontFamily: "Roboto-Black",
  },
  bottomImageContainer: {
    flex: 0.5,
    width: "100%",
    height: "100%",
  },

  bottomImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});

export default App;
