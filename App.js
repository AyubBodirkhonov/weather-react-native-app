import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Loader from "./components/loader";
import Weather from "./components/weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "67de5f2997d93fd07e7d7a20b256b263";

export default function App() {
  const [isLoading, setIsloading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log("data:", data);
    setLocation(data);
    setIsloading(false);
  };

  const setWeather = async (query) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    console.log("data:", data);
    setLocation(data);
    setIsloading(false);
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    } catch (e) {
      console.error("Error fetching location:", error);
      Alert.alert("Cannot find your current location");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      setWeather={setWeather}
      temp={Math.round(location.main.temp)}
      name={location.name}
      condition={location.weather[0].main}
    />
  );
}
