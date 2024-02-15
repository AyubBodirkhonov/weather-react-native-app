import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../assets/loader")}
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 500,
    height: 500,
  },
});
