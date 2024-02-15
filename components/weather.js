import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#FFFF", "#2F80ED"],
    title: "Good Weather",
    description: "Go for a walk, stop staying at home!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Sit at home",
    description: "Do you see what's on the street",
  },
  Clear: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take an unbrella",
    description: "Perhaps the rain will increase soon",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#000046", "#1CB5E0"],
    title: "It's raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "It's snowing outside",
    description: "Dress warmly, make snowman!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "It's open weather outside",
    description: "Go to work, have a good day!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setQuery] = useState("");

  const onClickHandler = () => {
    setWeather(query);
    setQuery("");
  };
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.mainContainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <View style={styles.flex}>
          <Text style={styles.temp}>{temp}°C </Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
      </View>
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.description}>
          {weatherOptions[condition].description}
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="city"
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
            placeholderTextColor="grey"
            required
          />
          <View style={styles.btnContainer}>
            <Button
              title="Search"
              style={styles.btn}
              onPress={onClickHandler}
              disabled={query ? false : true}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    color: "white",
    fontWeight: "400",
    fontSize: 24,
    textAlign: "left",
  },
  searchContainer: {
    width: "100%",
    backgroundColor: "#ffff",
    padding: 10,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  input: {
    width: "70%",
    color: "black",
    padding: 10,
  },
  btnContainer: {
    width: "30%",
  },
  btn: {
    width: "100%",
  },
});
