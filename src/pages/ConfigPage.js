import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ConfigPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ConfigPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});