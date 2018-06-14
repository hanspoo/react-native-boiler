import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ItemsList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ItemsList</Text>
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
