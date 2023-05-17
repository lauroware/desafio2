import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Productos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/bizcuchuelo.jpg")}
          />
          <Text style={styles.imageText}>Torta</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/gelatina.jpg")}
          />
          <Text style={styles.imageText}>Gelatina</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/huevo-frito.jpg")}
          />
          <Text style={styles.imageText}>Huevo Frito</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/torta-frita.jpg")}
          />
          <Text style={styles.imageText}>Torta Frita</Text>
        </View>

        <View style={styles.arrowContainer}>
          <Icon name="arrow-left" size={25} color="#000" />
        </View>
      </View>
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
  },

  backButton: {
    padding: 10,
  },
  arrowContainer: {
    alignItems: "flex-end",
    marginTop: 10,
  },
});

export default Productos;
